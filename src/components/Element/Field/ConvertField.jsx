import { useState } from 'react';
import { convertDDtoDMS, convertDMStoDD } from '../../../utils/Convertion';
import { TextField } from "./TextField";
import { SmallButton } from "../Button/SmallButton";
import PropTypes from "prop-types";
import { useMapContext } from '../../../Context/MapContext';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';

const ConvertField = (props) => {
    const { type } = props;
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [convertedLatitude, setConvertedLatitude] = useState('-');
    const [convertedLongitude, setConvertedLongitude] = useState('-');
    const { vectorSource } = useMapContext();

    const handleConvert = (event) => {
        event.preventDefault();

        if (type === 'DMS to DD') {
            const [latDeg, latMin, latSec, latDir] = latitude.split(' ');
            const [lonDeg, lonMin, lonSec, lonDir] = longitude.split(' ');

            const ddLat = convertDMStoDD(latDeg, latMin, latSec, latDir);
            const ddLon = convertDMStoDD(lonDeg, lonMin, lonSec, lonDir);

            setConvertedLatitude(ddLat.toFixed(6));
            setConvertedLongitude(ddLon.toFixed(6));

        } else if (type === 'DD to DMS') {
            const lat = parseFloat(latitude);
            const lon = parseFloat(longitude);

            const { degrees: latDeg, minutes: latMin, seconds: latSec } = convertDDtoDMS(lat);
            const { degrees: lonDeg, minutes: lonMin, seconds: lonSec } = convertDDtoDMS(lon);

            setConvertedLatitude(`${latDeg}° ${latMin}' ${latSec}"`);
            setConvertedLongitude(`${lonDeg}° ${lonMin}' ${lonSec}"`);
        }
    };

    const handleAddToMap = () => {
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);

        if (!isNaN(lat) && !isNaN(lon)) {
            const feature = new Feature({
                geometry: new Point(fromLonLat([lon, lat])),
            });
            vectorSource.addFeature(feature);
        }
        setLatitude('');
        setLongitude('');
    };

    return (
        <>
            <h1>Convert Coordinate {type}</h1>
            <form>
                <div className="mt-4 grid grid-cols-[1fr_2fr] items-center">
                    <h1 className="col-span-1">Latitude :</h1>
                    <TextField 
                        onChange={(e) => setLatitude(e.target.value)} 
                        placeholder="Input Latitude ..." 
                        value={latitude}
                        className="col-span-2"
                    />
                </div>
                <div className="mt-2 grid grid-cols-[1fr_2fr] items-center">
                    <h1 className="col-span-1">Longitude :</h1>
                    <TextField 
                        onChange={(e) => setLongitude(e.target.value)} 
                        placeholder="Input Longitude ..."
                        value={longitude} 
                        className="col-span-2"
                    />
                </div>
                <div className="mt-4 flex justify-center">
                    <SmallButton 
                        label="Convert" 
                        onClick={handleConvert}
                    />
                </div>
            </form>
            <div>
                <div className="mt-4 flex justify-between items-center">
                    <h1 className="col-span-1">Latitude :</h1>
                    <h1 className="col-span-1">{convertedLatitude}</h1>
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <h1 className="col-span-1">Longitude :</h1>
                    <h1 className="col-span-1">{convertedLongitude}</h1>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <SmallButton label="Add to Maps" onClick={handleAddToMap} />
            </div>
        </>
    );
}

ConvertField.propTypes = {
    type: PropTypes.oneOf(['DMS to DD', 'DD to DMS']).isRequired
}

export default ConvertField;

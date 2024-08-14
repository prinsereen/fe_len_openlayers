import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import VectorLayer from 'ol/layer/Vector';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { Feature } from 'ol';
import { useMapContext } from '../../../Context/MapContext';

export const MapFragment = () => {
    const mapRef = useRef(null);
    const { vectorSource } = useMapContext();

    useEffect(() => {
        if (mapRef.current) {
            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    image: new Icon({
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                    }),
                }),
            });

            const map = new Map({
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                    vectorLayer,
                ],
                view: new View({
                    center: fromLonLat([120, -1]),
                    zoom: 5,
                }),
                target: mapRef.current,
                controls: defaultControls({ zoom: false }),
            });

            map.on('click', (event) => {
                const feature = new Feature({
                    geometry: new Point(event.coordinate),
                });
                vectorSource.addFeature(feature);
            });
        }
    }, [vectorSource]);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute w-full h-full">
                <div ref={mapRef} className="w-full h-full" />
            </div>
        </div>
    );
};
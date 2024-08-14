import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import VectorSource from 'ol/source/Vector';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [vectorSource, setVectorSource] = useState(new VectorSource());

    return (
        <MapContext.Provider value={{ vectorSource, setVectorSource }}>
            {children}
        </MapContext.Provider>
    );
};

MapProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMapContext = () => useContext(MapContext);

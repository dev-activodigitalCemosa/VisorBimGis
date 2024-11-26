import './styles.css';
import 'leaflet/dist/leaflet.css';
import { initMap } from './mapConfig.js';
import { addMeasureControl } from './mapConfig.js';
import { addGeoJSONLayer,loadGeoJSON } from './mapConfig.js';

document.addEventListener('DOMContentLoaded', () => {
    const map = initMap();
    addMeasureControl(map);
    addGeoJSONLayer(map);
    loadGeoJSON(map)
});

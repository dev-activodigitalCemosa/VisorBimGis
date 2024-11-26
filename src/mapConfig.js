import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure.css';
import 'leaflet-measure';

export function initMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    setTimeout(() => {
        map.invalidateSize();
    }, 100);

    return map;
}

export function addMeasureControl(map) {
    L.control.measure({
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'sqmeters',
        secondaryAreaUnit: 'hectares',
    }).addTo(map);
}

export function addGeoJSONLayer(map) {
    const geojsonFeature = {
        type: "Feature",
        properties: {
            name: "Sample GeoJSON Feature",
        },
        geometry: {
            type: "Point",
            coordinates: [-0.10, 51.505],
        },
    };

    L.geoJSON(geojsonFeature).addTo(map).bindPopup("GeoJSON Point");
}

export function loadGeoJSON(map) {
    fetch('../data/geoData.json')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                onEachFeature: (feature, layer) => {
                    layer.bindPopup(`<b>${feature.properties.name}</b>`);
                },
            }).addTo(map);
        })
        .catch((error) => console.error('Error cargando GeoJSON:', error));
}

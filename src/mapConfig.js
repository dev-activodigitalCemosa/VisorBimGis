import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure.css';
import 'leaflet-measure';

export function initMap() {
    const map = L.map('map').setView([36.6997511089163,-4.438766220950655], 14);

    L.tileLayer('https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg', {
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
            name: "Cemosa Centro de estudios y materiales",
            url: "https://www.cemosa.es" // URL personalizada
        },
        geometry: {
            type: "Point",
            coordinates: [-4.467850032592893,36.684308561658646],
        },
    };

     // Crear capa GeoJSON
     L.geoJSON(geojsonFeature, {
        onEachFeature: (feature, layer) => {
            // Crear contenido del popup con un enlace
            if (feature.properties && feature.properties.name && feature.properties.url) {
                const popupContent = `
                    <div>
                        <strong>${feature.properties.name}</strong><br>
                        <a href="${feature.properties.url}" target="_blank" rel="noopener noreferrer">
                            Abrir enlace
                        </a>
                    </div>
                `;
                layer.bindPopup(popupContent); // Asociar el contenido al popup
            }
        },
    }).addTo(map);
}

export function loadGeoJSON(map) {
    fetch('../data/geoData.json')
        .then((response) => response.json())
        .then((data) => {
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.url) {
                        layer.bindPopup(`
                            <strong>${feature.properties.name}</strong><br>
                            ${feature.properties.description}<br>
                            <a href="${feature.properties.url}" target="_blank">Más información</a>
                        `);
                    } else {
                        layer.bindPopup(feature.properties.name);
                    }
                }
            }).addTo(map);
        })
        .catch((error) => console.error('Error cargando GeoJSON:', error));
}

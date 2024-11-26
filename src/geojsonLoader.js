export function loadGeoJSON(map) {
    const sampleGeoJSON = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [51.505,-0.09],
                },
                "properties": {
                    "name": "Marcador desde GeoJSON",
                },
            },
        ],
    };

    L.geoJSON(sampleGeoJSON, {
        onEachFeature: (feature, layer) => {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        },
    }).addTo(map);
}

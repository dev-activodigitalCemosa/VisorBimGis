export function addDrawTools(map) {
    const drawnItems = L.featureGroup().addTo(map);

    const drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
        },
        draw: {
            polygon: true,
            polyline: true,
            rectangle: true,
            circle: false,
            marker: true,
        },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        drawnItems.addLayer(layer);

        // Mostrar datos en formato GeoJSON en consola
        console.log('Objeto GeoJSON:', layer.toGeoJSON());
    });
}

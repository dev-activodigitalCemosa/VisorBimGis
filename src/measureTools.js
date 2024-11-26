export function addMeasureTools(map) {
    L.control.measure({
        primaryLengthUnit: 'kilometers',
        secondaryLengthUnit: 'meters',
        primaryAreaUnit: 'hectares',
        secondaryAreaUnit: 'sqmeters',
    }).addTo(map);
}

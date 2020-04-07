function initMap() {
    var myLatLng = { lat: 13.753352, lng: 100.543626 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 13.787237, lng: 100.533829 },
        mapTypeId: 'terrain',
    });
    var triangleCoords = [
        { lat: 13.7466304, lng: 100.5371464 },
        { lat: 13.80579, lng: 100.537635 }
    ];
    var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
    var beachMarker = new google.maps.Marker({
        position: { lat: 13.7466304, lng: 100.5371464 },
        map: map,
        label: "Centralworld",
    });
    var beachMarker = new google.maps.Marker({
        position: { lat: 13.80579, lng: 100.537635 },
        map: map,
        label: "SCG",
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 13.787237, lng: 100.533829 },
        mapTypeId: 'terrain',
    });
    var arr = [
        { lat: 13.7466304, lng: 100.5371464 },
        { lat: 13.80579, lng: 100.537635 }
    ];
    var route = new google.maps.Polygon({
        paths: arr,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    route.setMap(map);
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

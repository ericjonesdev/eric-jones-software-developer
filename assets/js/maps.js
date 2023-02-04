function initMap() {

    // The location of UOP
    const UOP = { lat: 33.411, lng: -112.012 };
    // The map, centered at UOP
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: UOP,
    });
    // The marker, positioned at UOP
    const marker = new google.maps.Marker({
    position: UOP,
    map: map,
    });
}

    window.initMap = initMap;

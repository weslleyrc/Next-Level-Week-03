const options = { /* Desabilitando função de Zoom do mapa e movimentação do mesmo */
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,  
}

//create map
const map = L.map('mapid', options).setView([-22.9539601,-43.2990787], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add marker
L.marker([-22.9539601,-43.2990787], { icon })
    .addTo(map)

/*image gallery*/

function selectImage(event){
    console.log("cliquei no botao")
}


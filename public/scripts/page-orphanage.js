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
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass) //forEach() = para cada
    
    function removeActiveClass(button){
        button.classList.remove("active")
    }
    

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para o botao clicado
    button.classList.add('active')
}


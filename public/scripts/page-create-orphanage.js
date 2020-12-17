//create map
const map = L.map('mapid').setView([-22.9539601,-43.2990787], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat; //capturando os dados de onde foi clicado
    document.querySelector('[name=lng]').value = lng; //capturando os dados de onde foi clicado
    

    //remove icon from
    marker && map.removeLayer(marker) /* caso o marker exista, remova o marker*/


    //add icon layer

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// photos upload

function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) //atribui o ultimo fieldsContainer e clona 
    //verificar se o campo esta vazio, se sim, nao adicionar ao container de .images
    const input =  newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // limpar o campo antes de adicionar ao container de .images
   input.value= "" 
    
    //adicionar o clone ao container de #Images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
    // limpar o valor do campo
        span.parentNoded.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//troca da seleção de sim ou nao
function toggleSelect(event){

    //pegar o botao clicado
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event){

    //validar se lat e lng estao preenchidos
    const needsLatAndLng = false;

    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
}




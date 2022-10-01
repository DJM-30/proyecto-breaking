const root = document.getElementById('root')
const loader = document.getElementById('contenedor')

//filtros
const vivos = document.getElementById('vivos')
const muertos = document.getElementById('muertos')
const todos = document.getElementById('todos')
const totalPersonajes = document.getElementById('total-personajes')


const getData = async() => {
    const url = `https://breakingbadapi.com/api/characters`
    const response = await fetch(url)
    const json = await response.json();
    total = json.length
    printData(json)
    setTimeout (() => {
        root.classList.remove('esconder')
        loader.classList.add('esconder')
    },2500)
    data = json;
    return json;
}

let data ={};

getData()


const printData = arr => {
    let card = '';
    totalPersonajes.innerHTML = arr.length
    arr.forEach((personaje) => {
        card = card + `<div class="col s12 m6 l3">
        <div class="card">
          <div class="card-image">
            <img src="${personaje.img}" height="600px" >
          </div>
          <div class="card-content">
            <p>Nombre: ${personaje.name} </p>
            <p>Nickname: ${personaje.nickname} </p>
            <p>Ocupation: ${personaje.occupation} </p>
            <p>Status: ${personaje.status} </p>
            <p>Birthday: ${personaje.birthday} </p>
            <p>Portrayed: ${personaje.portrayed} </p>
            <p>ID: ${personaje.char_id} </p>
          </div>
        </div>
      </div>`
    })
    root.innerHTML = card
}

vivos.addEventListener('click', () => {
    const arr = data;
    let arrVivos = []
    for (let i=0; i < arr.length; i++){
        if(arr[i].status === 'Alive'){
            arrVivos.push(arr[i])
        }
    }
    printData(arrVivos)
})
muertos.addEventListener('click', () => {
    const arr = data;
    const arrMuertos = arr.filter(personaje => personaje.status !== 'Alive')
    printData(arrMuertos)
})
todos.addEventListener('click', () => {
    const arr = data;
    printData(arr)
})


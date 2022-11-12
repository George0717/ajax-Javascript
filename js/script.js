let jumlahPokemon = document.getElementById('jumlah_pokemon')
let listPokemon = document.getElementById('list_pokemon')

fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
.then(response => 
    response.json())
.then(data => { 
    console.log(data)
    jumlahPokemon.innerHTML = data.count
    console.log(data.results)   
    data.results.forEach(showPokemon)
})
.catch(error => {
    console.log(error)  
});

function showPokemon(value, index){
    listPokemon.innerHTML += `<li>${value.name}</li>`
}
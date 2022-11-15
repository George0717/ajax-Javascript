let jumlahPokemon = document.getElementById("jumlah_bola");
let listPokemon = document.getElementById("list_bola");

fetch("http://127.0.0.1:5500/standings.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    jumlahPokemon.innerHTML = data.count;
    console.log(data.results);
    data.standings[0].table.forEach(showPokemon);
  })
  .catch((error) => {
    console.log(error);
  });

function showPokemon(value, index) {
  listPokemon.innerHTML += `<table class="table">
  <thead>
   
  </thead>
  <tbody>
    <tr>
      
      <td>${value.name}</td>
      <td>${value.code}</td>
      <td>${value.type}</td>
    </tr>`;
}

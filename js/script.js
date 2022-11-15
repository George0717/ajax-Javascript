let jumlahPokemon = document.getElementById("jumlah_bola");
let listPokemon = document.getElementById("list_bola");

fetch("http://127.0.0.1:5500/matches.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.competition);
    data.competition[0].forEach(showPokemon);
  })
  .catch((error) => {
    console.log(error);
  });

function showPokemon(value, index) {
  listPokemon.innerHTML += `<thead> <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>${value.name}</td>
      <td>${value.code}</td>
      <td>${value.type}</td>
    </tr>
    </tbody>`;
}

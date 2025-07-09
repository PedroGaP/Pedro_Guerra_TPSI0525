let nomeInput = document.getElementById("nome");
let nomeDiv = document.getElementById("nome_display");

nomeInput.addEventListener("input", (ev) => {
  console.log(nomeInput.value);
  nomeDiv.innerHTML = `<p>${nomeInput.value}</p>`;
});

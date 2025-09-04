const livrosContainer = document.getElementById("livros-lista");

function renderLivros(lista) {
  livrosContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let livro = lista[i];
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${livro.image}" class="card-img-top" alt="${
      livro.title
    }" loading="lazy">
        <div class="card-body">
          <h5 class="card-title">${livro.title}</h5>
          <p class="card-text text-muted">${livro.category} - ${
      livro.author
    }</p>
          <p class="card-text">${livro.description}</p>
          <p class="fw-bold">${livro.price.toFixed(2)} €</p>
          <button class="btn btn-primary buy-button" data-id="${
            livro.id
          }">Comprar</button>
        </div>
      </div>
    `;

    livrosContainer.appendChild(card);
  }
}

renderLivros(books);

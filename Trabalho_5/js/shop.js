const livrosContainer = document.getElementById("livros-lista");

function renderLivros(lista) {
  livrosContainer.innerHTML = "";

  lista.forEach((book) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${book.image}" class="card-img-top" alt="${
      book.title
    }" loading="lazy">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text text-muted">${book.category} - ${book.author}</p>
          <p class="card-text">${book.description}</p>
          <p class="fw-bold">${book.price.toFixed(2)} €</p>
          <button class="btn btn-primary buy-button" data-id="${
            book.id
          }">Comprar</button>
        </div>
      </div>
    `;

    livrosContainer.appendChild(card);
  });
}

renderLivros(books);

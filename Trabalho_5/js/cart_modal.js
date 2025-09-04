const cartSheetEl = document.getElementById("cartSheet");
const cartOffcanvas = new bootstrap.Offcanvas(cartSheetEl);
const cartItemsContainer = document.querySelector("#cart-items");

const cartTotal = document.querySelector("#cart-total");

let refreshTotal = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;

  cart.forEach((bookId) => {
    let book = books.find((b) => b.id == bookId);
    if (!book) return;

    total += book.price;
  });

  cartTotal.innerHTML = "€" + total.toFixed(2);
};

let loadCartItems = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartBooks = {};
  let html = "";

  cart.forEach((bookId) => {
    if (cartBooks[bookId]) {
      cartBooks[bookId]++;
      return;
    }

    cartBooks[bookId] = 1;
  });

  Object.keys(cartBooks).forEach(function (key, index) {
    let qntt = cartBooks[key];
    let book = books.find((b) => b.id == parseInt(key));
    if (!book) return;

    html += `<div class="card mb-3 shadow-sm">
            <div class="row g-0 align-items-center">
              <div class="col-4">
                <img
                  src="${book.image}"
                  class="img-fluid rounded-start"
                  alt="Livro"
                />
              </div>
              <div class="col-8">
                <div class="card-body p-2">
                  <h6 class="card-title mb-1">${book.title}</h6>
                  <p class="card-text mb-1 text-muted">€${book.price}</p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group btn-group-sm" role="group">
                      <button class="btn btn-outline-secondary" id="remove-cart-item" data-id="${book.id}">-</button>
                      <span class="px-2">${qntt}</span>
                      <button class="btn btn-outline-secondary" id="add-cart-item" data-id="${book.id}">+</button>
                    </div>
                    <button class="btn btn-outline-danger btn-sm" id="delete-cart-item" data-id="${book.id}">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  });
  cartItemsContainer.innerHTML = html;
};

let loadButtonEvents = () => {
  const deleteButtons = document.querySelectorAll("#delete-cart-item");
  const removeButtons = document.querySelectorAll("#remove-cart-item");
  const addButtons = document.querySelectorAll("#add-cart-item");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let bookId = btn.dataset.id;

      let cart = JSON.parse(localStorage.getItem("cart"));
      cart = cart.filter((id) => id != bookId);

      localStorage.setItem("cart", JSON.stringify(cart));
      refreshTotal();
      loadCartItems();
      refreshCartCount();
      loadButtonEvents();
    });
  });

  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.dataset.id;
      let cart = JSON.parse(localStorage.getItem("cart"));

      const index = cart.indexOf(id);
      if (index > -1) {
        cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      refreshTotal();
      loadCartItems();
      refreshCartCount();
      loadButtonEvents();
    });
  });

  addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.dataset.id;
      let cart = JSON.parse(localStorage.getItem("cart"));

      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));

      refreshTotal();
      loadCartItems();
      refreshCartCount();
      loadButtonEvents();
    });
  });
};

const cartButton = document.querySelector('[data-bs-target="#cartSheet"]');
cartButton.addEventListener("click", () => {
  loadCartItems();
  refreshTotal();
  loadButtonEvents();
  cartOffcanvas.show();
});

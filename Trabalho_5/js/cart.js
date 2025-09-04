const booksContainer = document.getElementById("livros-lista");
const cartBadge = document.querySelector("#cart-count");
const cartToastEl = document.getElementById("cart-toast");
const cartToast = new bootstrap.Toast(cartToastEl);

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

let refreshCartCount = () => {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let itemsCount = cartItems.length;
  cartBadge.textContent = itemsCount > 9 ? "9+" : itemsCount;
};

refreshCartCount();

booksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy-button")) {
    const bookId = e.target.dataset.id;

    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(bookId);
    localStorage.setItem("cart", JSON.stringify(cart));

    const cartBadge = document.getElementById("cart-count");
    cartBadge.textContent = cart.length > 9 ? "9+" : cart.length;

    cartToast.show();
  }
});

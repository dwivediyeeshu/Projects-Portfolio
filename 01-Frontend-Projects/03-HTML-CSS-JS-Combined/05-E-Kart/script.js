document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cartItem")) || [];
  renderCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
       <span>${product.name} - $${product.price.toFixed(2)}</span>
       <button data-id="${product.id}">Add to cart</button>
       `;

    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const prodId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === prodId);
      console.log(product);

      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        let cartItem = document.createElement("div");
        cartItem.innerHTML = `
         <span>${item.name} - $${item.price.toFixed(2)}</span>
         <button data-id="${item.id}">Remove</button>
        `;

        cartItem.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") {
            cart = cart.filter((p) => p.id !== item.id);
            cartItem.remove();
            saveCart();
            renderCart();
          }
        });

        cartItems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `0`;
    }
  }

  checkoutButton.addEventListener("click", () => {
    cart.length = 0;
    saveCart();
    alert("Checkout Successfully");
    renderCart();
  });

  function saveCart() {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }
});

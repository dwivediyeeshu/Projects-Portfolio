document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Laptop", price: 399.99 },
    { id: 2, name: "Smartphone", price: 99.99 },
    { id: 3, name: "Tablet", price: 189.99 },
  ];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");
});

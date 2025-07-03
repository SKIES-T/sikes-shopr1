let cartCount = 0;
let cartItems = [];

function addToCart(name, price) {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name, price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  cartCount = cartItems.length;
  document.getElementById("cart-count").textContent = cartCount;

  alert(`เพิ่ม ${name} เข้าตะกร้าแล้ว!`);
}

window.onload = function() {
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  const countElem = document.getElementById("cart-count");
  if (countElem) {
    countElem.textContent = items.length;
  }
};

const sizes = [
  { label: "Small", price: "£21.90" },
  { label: "Medium", price: "£25.90" },
  { label: "Large", price: "£27.90" },
  { label: "XL Large with Sauces", price: "£32.90" }
];

function createSizeOptions(containerId) {
  const container = document.getElementById(containerId);
  sizes.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("size-option");
    if (index === 0) div.classList.add("active");
    div.innerHTML = `
      <span class="label">${item.label}</span>
      <span class="price">${item.price}</span>
    `;
    div.addEventListener("click", () => {
      container.querySelectorAll(".size-option").forEach(opt => opt.classList.remove("active"));
      div.classList.add("active");
    });
    container.appendChild(div);
  });
}

// Apply to all
createSizeOptions("sizeContainer1");
createSizeOptions("sizeContainer2");
createSizeOptions("sizeContainer3");

const cartItems = [
  {
    qty: 1,
    price: "£27.90",
    name: '12" Vegetarian Pizza',
    desc: "No Mushrooms + green <br> peppers",
    img:"../images/Remove.png"
  },
  {
    qty: 1,
    price: "£17.90",
    name: '17" Tandoori Pizza',
    desc: "No Mushrooms + green<br>  peppers",
    img:"../images/Remove1.png"
  },
  {
    qty: 2,
    price: "£4.90",
    name: "Coke Coca Cola",
    desc: "",
    img:"../images/Remove2.png"
  },
  {
    qty: 1,
    price: "£27.90",
    name: '12" Vegetarian Pizza',
    desc: "No Mushrooms + green <br> peppers",
    img:"../images/Remove3.png"
  }
];

const container2 = document.getElementById("cartContainer");

cartItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("cart-item");

  div.innerHTML = `
    <div class="item-info">
      <div class="qty-circle">${item.qty}x</div>
      <div class="details">
        <span class="price">${item.price}</span>
        <span class="name">${item.name}</span>
        ${item.desc ? `<span class="desc">${item.desc}</span>` : ""}
      </div>
    </div>
    <img src="${item.img}" alt="${item.name}" class="item-img" />
  `;

  container2.appendChild(div);
});

const popup = document.getElementById("popupMessage");
const popupText = document.getElementById("popupText");

function showPopup(message, type = "error") {
  popupText.textContent = message;

  // Reset popup style
  popup.className = "popup";
  popup.classList.add(type);
  popup.classList.remove("hidden");

  // Fade in
  setTimeout(() => popup.classList.add("show"), 10);

  // Auto-hide after 4 seconds
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.classList.add("hidden"), 400);
  }, 10000);
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  showPopup("Minimum delivery is £20. You must spend £10 more for the checkout!", "error");
});

document.getElementById("deliveryBtn").addEventListener("click", () => {
  showPopup("We are open now, but delivery starts at 18:00; however, you may order and collect in store now.", "success");
});


const item = document.getElementById('checkoutBtn');


item.addEventListener('click', () => {
  // Add selected class
  item.classList.add('selected');

  // After 4 seconds, remove selection + message
  setTimeout(() => {
    item.classList.remove('selected');
    
  }, 10000);
});

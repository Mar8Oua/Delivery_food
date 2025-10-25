// ✅ Cart button
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    alert('ll.html');
  });
}

// ✅ Login / Create Account Button
const loginBtn = document.getElementById('Login');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    alert('👤 You will be directed to the login page shortly.');
  });
}
    // ✅ Search for zip code
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

if (searchBtn && searchInput && result) {
  searchBtn.addEventListener('click', () => {
    const input = searchInput.value.trim();
    if (input === '') {
      result.textContent = '⚠️ Please enter your zip code.';
    } else {
      result.textContent = `🔍 Searching for restaurants in"${input}"...`;
    }
  });
}

// ✅ Category buttons (Vegan, Sushi...)
const categoryButtons = document.querySelectorAll('.dashbord_2 button');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`🍽️ Showing restaurants in the "${button.textContent}" category coming soon!`);
  });
});
/*change color */
const orderInfo = document.querySelector(".order_info");
const buttons = document.querySelectorAll(".butt");
let isWhite = true;

setInterval(() => {
  if (isWhite) {
    orderInfo.style.backgroundColor = "rgba(3, 8, 31, 1)";
    orderInfo.style.color = "white";
    buttons.forEach(btn => {
      btn.style.color = "white";     
      btn.style.borderColor = "white";
    });
  } else {
    orderInfo.style.backgroundColor = "white";
    orderInfo.style.color = "black";
    buttons.forEach(btn => {
      btn.style.color = "black";     
      btn.style.borderColor = "black";
    });
  }
  isWhite = !isWhite;
}, 5000);



// ✅ Frequently Asked Questions (FAQ) buttons
const faqBtns = document.querySelectorAll('.ques button');
faqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`💬The answer to the question: "${btn.textContent}" is being prepared.`);
  });
});

// ✅ Subscribe button in the mail
document.getElementById("subscribeBtn").addEventListener("click", function() {
  const emailInput = document.getElementById("searchInput").value.trim();
  const message = document.getElementById("message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    message.textContent = "✅ You have successfully subscribed!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ Invalid email, try again.";
    message.style.color = "red";
  }
});


// ✅ Footer buttons (Privacy Policy - Terms...)
const footerBtns = document.querySelectorAll('.last_bar button');
footerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`📄 The "${btn.textContent}" page will be open soon.`);
  });
});

// Hide menu item
 document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });













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

  // تعبير يتحقق من صحة الإيميل
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    message.textContent = "✅ تم الاشتراك بنجاح!";
    message.style.color = "green";
  } else {
    message.textContent = "❌ البريد الإلكتروني غير صحيح، حاول مرة أخرى.";
    message.style.color = "red";
  }
});


// ✅ Footer buttons (Privacy Policy - Terms...)
const footerBtns = document.querySelectorAll('.last_bar button');
footerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`📄 سيتم فتح صفحة "${btn.textContent}" قريباً.`);
  });
});

// Hide menu item
 document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      console.log("✅ الزر يعمل!");
    });
  });













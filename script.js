// Mobil menü aç/kapa
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Yıl bilgisini footer'a yaz
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Basit form submit simülasyonu
function handleFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("formStatus");
  if (status) {
    status.textContent =
      "Teşekkürler! Mesajın alındı. En kısa sürede seninle iletişime geçeceğim.";
  }
  // Gerçek sistemde burada backend / e-posta entegrasyonu yapılır.
  return false;
}

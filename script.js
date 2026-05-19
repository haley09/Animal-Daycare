const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
      "Thanks for reaching out! Your message has been received.";
    contactForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      petName: document.getElementById("pet").value,
      message: document.getElementById("message").value
    };

    formMessage.textContent = "Sending your message...";
    submitButton.disabled = true;

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Could not send your message.");
      }

      formMessage.textContent =
        "Thanks for reaching out! Your message has been received.";
      contactForm.reset();
    } catch (error) {
      formMessage.textContent =
        error.message || "Something went wrong. Please try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontaktForm");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          window.location.href = "https://jfrodin.github.io/fredagsprinsen.se/tack.html";
        } else {
          alert("Något gick fel. Försök igen senare.");
        }
      } catch (error) {
        alert("Kunde inte skicka formuläret. Kontrollera din internetanslutning.");
      }
    });
  }
});

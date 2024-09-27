document
  .getElementById("language-selector")
  .addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-en]").forEach(function (element) {
      if (lang === "en") {
        element.textContent = element.getAttribute("data-en");
      } else if (lang === "es") {
        element.textContent = element.getAttribute("data-es");
      }
    });
  });

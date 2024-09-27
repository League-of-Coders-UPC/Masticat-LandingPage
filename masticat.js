document.getElementById('language-selector').addEventListener('change', function() {
    const lang = this.value; // 'en' o 'es'

    // Cambiar los textos en la página basados en el valor de 'data-en' o 'data-es'
    document.querySelectorAll('[data-en]').forEach(function(element) {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'es') {
            element.textContent = element.getAttribute('data-es');
        }
    });
});
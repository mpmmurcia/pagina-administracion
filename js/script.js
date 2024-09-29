document.querySelectorAll('.toggle-info').forEach(button => {
    button.addEventListener('click', function() {
        console.log("Botón presionado:", this.getAttribute('data-info')); // Esto es para verificar si el evento funciona.
        const infoId = this.getAttribute('data-info');
        const infoElement = document.getElementById(infoId);

        // Alternar el display entre block y none
        if (infoElement.style.display === "none" || infoElement.style.display === "") {
            infoElement.style.display = "block";
        } else {
            infoElement.style.display = "none";
        }
    });
});
console.log
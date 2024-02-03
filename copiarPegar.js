const botonesCopiar = document.querySelectorAll(".copiarContenido");

botonesCopiar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const codigoId = boton.getAttribute("data-target");
        const codigoBlanco = document.getElementById(codigoId);

        if (codigoBlanco) {
            const range = document.createRange();
            range.selectNode(codigoBlanco);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            try {
                document.execCommand("copy");
                console.log("Texto copiado al portapapeles:", codigoBlanco.textContent);
            } catch (err) {
                console.error("Error al copiar al portapapeles:", err);
            }

            window.getSelection().removeAllRanges();

            // Obtener la referencia a la imagenCopiar dinámicamente
            const contenedorCodigo = boton.closest(".codigo");
            const imagenCopiar = contenedorCodigo.querySelector(".copiarContenido img");

            if (imagenCopiar) {
                imagenCopiar.src = "imgen/comprobar.png";
                console.log("el contenido llega o no hasta aqui", imagenCopiar);

                setTimeout(() => {
                    // Restaurar la imagen original después de un tiempo
                    imagenCopiar.src = "imgen/copiar.png";
                }, 500);
            }
        }
    });
});

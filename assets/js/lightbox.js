function openLightbox(image) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightbox.style.display = "block"; // Muestra el lightbox
    lightboxImage.src = image.src; // Cambia la imagen en el lightbox
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Oculta el lightbox
}

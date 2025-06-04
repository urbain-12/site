document.querySelectorAll(".carousel").forEach(function(carousel) {
    const images = carousel.querySelectorAll("img");
    let current = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    };

    const nextImage = () => {
        current = (current + 1) % images.length;
        showImage(current);
    };

    const prevImage = () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    };

    // boutons
    carousel.querySelector(".next").addEventListener("click", nextImage);
    carousel.querySelector(".prev").addEventListener("click", prevImage);

    // défilement automatique toutes les 4 secondes
    setInterval(nextImage, 4000); // 4000 = 4 secondes

    showImage(current);
});

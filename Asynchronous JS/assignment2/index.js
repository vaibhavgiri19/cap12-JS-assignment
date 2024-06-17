const images = [
    "https://i.pinimg.com/736x/bc/b0/9d/bcb09d149308bc9854e83227d69756c5.jpg",
    "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2023/05/04/2202473539626/MIDR1_US_2023_Amazon_1920x1080_2538342_1920x1080.jpg",
    "https://facts.net/wp-content/uploads/2023/06/44-facts-about-the-movie-mission-impossible-ghost-protocol-1687427407.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjZ04gYUWrjt-DdrE2H8wfAfeK6TuHLGY589h2vFk52WpTnIKH55wZUh5Bd7j_c1zgOg&usqp=CAU",
    "https://material.asset.catchplay.com/PAR-IN-001-A0128/artworks/posters/PAR-IN-001-A0128-P272.jpg?hash=1672738925"
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

function startSlideshow() {
    slideshow.src = images[currentIndex];
    setInterval(showNextImage, 2000);
}

document.addEventListener('DOMContentLoaded', startSlideshow);

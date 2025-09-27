console.log('toto')
// Change top btn visibility
const scrollTopButton = document.getElementById('scroll-top-btn');

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
}

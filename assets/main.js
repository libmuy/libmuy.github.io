const menu = document.querySelector('.menu');
const side = document.querySelector('#right-side');
//Get the button:
goToTopBtn = document.getElementById("goToTopBtn");


// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

menu.addEventListener('click', function () {
    this.classList.toggle('toggle');
    side.classList.toggle('toggle');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var nav = document.getElementsByTagName("nav")[0];

    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-51px";
    }
    prevScrollpos = currentScrollPos;
    // console.log("currentScrollPos:" + currentScrollPos);
    if (currentScrollPos > 300) {
        goToTopBtn.style.visibility = "visible";
        goToTopBtn.style.opacity = "0.5";
    } else {
        goToTopBtn.style.visibility = "hidden";
        goToTopBtn.style.opacity = "0";
    }
}

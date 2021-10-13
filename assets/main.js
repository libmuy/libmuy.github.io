
/**************************************************************************
 * Menu bar  and  GotoTop button
**************************************************************************/
const menu = document.querySelector('.menu');
const side = document.querySelector('#right-side');
goToTopBtn = document.getElementById("goToTopBtn");


// GotoTop button click handler
function goToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// Menu bar click handler
menu.addEventListener('click', function () {
    this.classList.toggle('toggle');
    side.classList.toggle('toggle');
});

// Window scroll handler
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



/**************************************************************************
 * add ancher links
**************************************************************************/
var anchorForId = function (id) {
    var anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.href = "#" + id;
    anchor.innerHTML = "<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>";
    anchor.title = "Permalink";
    return anchor;
};

var linkifyAnchors = function (level, containingElement) {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
        var header = headers[h];

        if (typeof header.id !== "undefined" && header.id !== "") {
            header.appendChild(anchorForId(header.id));
        }
    }
};

document.onreadystatechange = function () {
    if (this.readyState === "complete") {
        var contentBlock = document.getElementsByClassName("post")[0]
        if (!contentBlock) {
            return;
        }
        for (var level = 1; level <= 6; level++) {
            linkifyAnchors(level, contentBlock);
        }
    }
};




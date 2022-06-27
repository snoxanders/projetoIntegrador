class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

//AVALIAÇÃO ESTRELA - DIEGO


function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;

    if (estrela == 5) {
        if (s5 == url + "public/img/Hicon/star0.png") {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star1.png";
            document.getElementById("s4").src = "public/img/Hicon/star1.png";
            document.getElementById("s5").src = "public/img/Hicon/star1.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star1.png";
            document.getElementById("s4").src = "public/img/Hicon/star1.png";
            document.getElementById("s5").src = "public/img/Hicon/star1.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4
    if (estrela == 4) {
        if (s4 == url + "public/img/Hicon/star0.png") {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star1.png";
            document.getElementById("s4").src = "public/img/Hicon/star1.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star1.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 3;
        }
    }

    //ESTRELA 3
    if (estrela == 3) {
        if (s3 == url + "public/img/Hicon/star0.png") {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star1.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star0.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 2;
        }
    }

    //ESTRELA 2
    if (estrela == 2) {
        if (s2 == url + "public/img/Hicon/star0.png") {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star1.png";
            document.getElementById("s3").src = "public/img/Hicon/star0.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star0.png";
            document.getElementById("s3").src = "public/img/Hicon/star0.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1
    if (estrela == 1) {
        if (s1 == url + "public/img/Hicon/star0.png") {
            document.getElementById("s1").src = "public/img/Hicon/star1.png";
            document.getElementById("s2").src = "public/img/Hicon/star0.png";
            document.getElementById("s3").src = "public/img/Hicon/star0.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "public/img/Hicon/star0.png";
            document.getElementById("s2").src = "public/img/Hicon/star0.png";
            document.getElementById("s3").src = "public/img/Hicon/star0.png";
            document.getElementById("s4").src = "public/img/Hicon/star0.png";
            document.getElementById("s5").src = "public/img/Hicon/star0.png";
            avaliacao = 0;
        }
    }

    document.getElementById('rating').innerHTML = avaliacao;

}
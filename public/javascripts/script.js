'use strict'


// NAVBAR
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

// home

// form

// const submit = document.getElementById("button-form");

// submit.addEventListener("click", validate);

// function validate(e) {
//     e.preventDefault();

//     const nameField = document.getElementById("name");
//     let valid = true;

//     if (!nameField.value) {
//         const nameError = document.getElementById("nameError");
//         nameError.classList.add("visible");
//         nameField.classList.add("invalid");
//         nameError.setAttribute("aria-hidden", false);
//         nameError.setAttribute("aria-invalid", true);
//     }
//     return valid;
// }


function oi() {
    alert('e ai trouxa')
}
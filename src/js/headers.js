"use strict";
// TOPNAV ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const dropdown = document.querySelector('.dropdown-icon');
    const github = document.querySelector('.github-logo');
    const topNavOne = document.querySelector('.topnav-item__one a');
    const topNavTwo = document.querySelector('.topnav-item__two a');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            if (header)
                header.classList.add('header-scrolled');
            if (dropdown)
                dropdown.classList.add('dropdown-scrolled');
            if (github)
                github.classList.add('github-scrolled');
            if (topNavOne)
                topNavOne.classList.add('topnav-scrolled');
            if (topNavTwo)
                topNavTwo.classList.add('topnav-scrolled');
        }
        else {
            if (header)
                header.classList.remove('header-scrolled');
            if (dropdown)
                dropdown.classList.remove('dropdown-scrolled');
            if (github)
                github.classList.remove('github-scrolled');
            if (topNavOne)
                topNavOne.classList.remove('topnav-scrolled');
            if (topNavTwo)
                topNavTwo.classList.remove('topnav-scrolled');
        }
    });
});
// LOGO ANIMATION  
function handleScroll() {
    const shouldAddMargin = window.scrollY >= 50;
    const dPath = document.querySelector('.d');
    const jPath = document.querySelector('.j');
    const otherLettersElements = document.querySelectorAll('.other-letters');
    if (shouldAddMargin) {
        dPath.style.transform = 'translate(-38px, 0)';
        dPath.classList.add('logo-jd-scrolled');
        jPath.classList.add('logo-jd-scrolled');
        otherLettersElements.forEach(element => {
            element.classList.add('hide');
        });
    }
    else {
        dPath.style.transform = 'none';
        dPath.classList.remove('logo-jd-scrolled');
        jPath.classList.remove('logo-jd-scrolled');
        otherLettersElements.forEach(element => {
            element.classList.remove('hide');
        });
    }
}
window.addEventListener('scroll', handleScroll);
handleScroll();
// MENU CONTAINER RESIZE ANIMATION
window.addEventListener('scroll', function () {
    var menuContainer = document.querySelector('.dropdown-menu__container');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        menuContainer.classList.add('dropdown-menu__container-scrolled');
    }
    else {
        menuContainer.classList.remove('dropdown-menu__container-scrolled');
    }
});
// DROPDOWN TOGGLE ON/OFF
document.addEventListener('DOMContentLoaded', function () {
    var dropdownLink = document.querySelector('.dropdown-link');
    var dropdownMenuContainer = document.querySelector('.dropdown-menu__container');
    var dropdownIcon = document.querySelector('.dropdown-icon');
    dropdownLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (dropdownMenuContainer.style.display === 'none' || dropdownMenuContainer.style.display === '') {
            dropdownMenuContainer.style.display = 'block';
            dropdownIcon.innerHTML = '<path d="M2 6l10 10 10-10M2 26l10-10 10 10" stroke-width="2" stroke-linecap="round" fill="none"/>';
        }
        else {
            dropdownMenuContainer.style.display = 'none';
            dropdownIcon.innerHTML = '<path d="M4 6h22M4 15h22M4 24h22" stroke-width="2" stroke-linecap="round"/>';
        }
    });
});

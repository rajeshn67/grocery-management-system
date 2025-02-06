


hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});


hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());


showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});



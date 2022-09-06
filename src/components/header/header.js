
const menuMobile = () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("nav-menu-shown")
    for(let link of menuLinks) {
        link.classList.toggle("links-shown");
    }
  

}

export default menuMobile
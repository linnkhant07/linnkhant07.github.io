//click hamburger to collapse
function toggleMenu(){
    const icon = document.querySelector(".hamburger-icon")
    const menu = document.querySelector(".hamburger-links")

    icon.classList.toggle("open");
    menu.classList.toggle("open");
}
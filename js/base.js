
function menuOnOff() {
    let menu = document.getElementsByClassName("main-nav")[0]
    menu.classList.forEach(element => {
        if (element === "main-nav--close"){
            menu.className = "main-nav"
        } else {
            menu.className = "main-nav main-nav--close"
        }
    });
}
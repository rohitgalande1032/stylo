const menuButton = document.querySelector('.menu-button')
const mainMenu = document.querySelector('.main');

mainMenu.style.right = "-500px";

menuButton.onclick = function () {
    if(mainMenu.style.right == "-500px"){
        mainMenu.style.right = "0";

    }
 else{
        mainMenu.style.right = "-500px";
    }
}
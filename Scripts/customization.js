function init_custom(){
    let storedColor;
    if (localStorage.getItem("backclr") === null) {
        localStorage.setItem("backclr", "rgb(255, 255, 255)");
    }
    
    localStorage.setItem("backclr", "rgb(255, 255, 255)");
    storedColor = localStorage.getItem("backclr");
    document.documentElement.style.setProperty("--bck-color",storedColor);

    if (localStorage.getItem("borderclr") === null) {
        localStorage.setItem("borderclr", "000, 000, 000");
    }
    if (localStorage.getItem("validnumberclr") === null) {
        localStorage.setItem("validnumberclr", "000, 000, 000");
    }


}
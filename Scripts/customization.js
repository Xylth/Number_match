function init_custom(){
    let storedColor;
    if (localStorage.getItem("backclr") === null) {
        localStorage.setItem("backclr", "rgb(255, 255, 255)");
    }
    
    storedColor = localStorage.getItem("backclr");
    document.documentElement.style.setProperty("--bck-color",storedColor);

    if (localStorage.getItem("borderclr") === null) {
        localStorage.setItem("borderclr", "rgb(0, 0, 0)");
    }
    
    storedColor = localStorage.getItem("borderclr");
    document.documentElement.style.setProperty("--border-color",storedColor);

    if (localStorage.getItem("validnumberclr") === null) {
        localStorage.setItem("validnumberclr", "rgb(0, 0, 0)");
    }
    
    storedColor = localStorage.getItem("validnumberclr");
    document.documentElement.style.setProperty("--valnmb-color",storedColor);

    
    if (localStorage.getItem("deadnmbclr") === null) {
        localStorage.setItem("deadnmbclr", "rgb(164, 164, 164)");
    }
    
    storedColor = localStorage.getItem("deadnmbclr");
    document.documentElement.style.setProperty("--deadnmb-color",storedColor);

    if (localStorage.getItem("clueclr") === null) {
        localStorage.setItem("clueclr", "rgb(50, 186, 68)");
    }
    
    storedColor = localStorage.getItem("clueclr");
    document.documentElement.style.setProperty("--clue-color",storedColor);

}
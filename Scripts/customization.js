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

    
    if (localStorage.getItem("grdclr") === null) {
        localStorage.setItem("grdclr", "rgb(127, 127, 127)");
    }
    
    storedColor = localStorage.getItem("grdclr");
    document.documentElement.style.setProperty("--grd-color",storedColor);

    
    if (localStorage.getItem("selclr") === null) {
        localStorage.setItem("selclr", "rgb(42, 67, 151)");
    }
    
    storedColor = localStorage.getItem("selclr");
    document.documentElement.style.setProperty("--sel-color",storedColor);

    if (localStorage.getItem("failclr") === null) {
        localStorage.setItem("failclr", "rgb(210, 20, 20)");
    }
    
    storedColor = localStorage.getItem("failclr");
    document.documentElement.style.setProperty("--fail-color",storedColor);

    
    if (localStorage.getItem("txtclr") === null) {
        localStorage.setItem("txtclr", "rgb(0, 0, 0)");
    }
    
    storedColor = localStorage.getItem("txtclr");
    document.documentElement.style.setProperty("--txt-color",storedColor);

    
    if (localStorage.getItem("txt2clr") === null) {
        localStorage.setItem("txt2clr", "rgb(116, 116, 116)");
    }
    
    storedColor = localStorage.getItem("txt2clr");
    document.documentElement.style.setProperty("--txt2-color",storedColor);
    //    <input type="color" id="colorPicker"></input>
}

function custom_menu(){
    
}
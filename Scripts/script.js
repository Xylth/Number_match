let ga;
let gr;
let baseLife=5;

window.onload = function() {
    // Appeler la fonction à l'ouverture de la page
   init_global();
   adjustDesign();
};

function init_global(){
    ga = new game();
    gr= ga.getChain();
    initBtn();
}

function init_new_game(){
    ga.initGameData();
    gr.deleteGrid();
    gr.fillGrid();
}

function adjustDesign() {
    const usableHeight = window.innerHeight; // Hauteur utilisable réelle
    const usableWidth = window.innerWidth; // Hauteur utilisable réelle
    const tb = document.querySelector("#topBand");
    const tt = document.querySelector("#topTrans");
    const bt = document.querySelector("#botTrans");
    const bb = document.querySelector("#botBand");
    const ct = document.querySelector("#content");
    const sc = document.querySelector("#score");
    const img = document.querySelectorAll(".imgContain img");
    const topText = document.querySelectorAll(".subTopElement");
    const botEl = document.querySelectorAll(".botElement img");
    const botT = document.querySelector(".botTag");
    const cell = document.querySelectorAll(".td");
    


    tb.style.height = (usableHeight * 0.2) + "px";
    tt.style.height = (usableHeight * 0.02) + "px";
    tt.style.top = (usableHeight * 0.2) + "px";
    bt.style.height = (usableHeight * 0.02) + "px";
    bt.style.bottom = (usableHeight * 0.15) + "px";
    bb.style.height = (usableHeight * 0.15) + "px";
    

    
    ct.style.height = (usableHeight * 0.65) + "px"; 
    ct.style.padding = (usableHeight * 0.05) + "px"; 
    sc.style.fontSize = (usableHeight * 0.05) + "px"; // 50% de la hauteur du bandeau
    img.forEach(image => {
        image.style.height = (usableHeight * 0.05) + "px"; // 50% de la hauteur du bandeau
        
        image.style.padding = (usableHeight * 0.01) + "px"; // 50% de la hauteur du bandeau
    });
    topText.forEach(text => {
        text.style.fontSize = (usableHeight * 0.03) + "px"; // 50% de la hauteur du bandeau
        text.style.paddingLeft = (usableHeight * 0.02) + "px"; // 50% de la hauteur du bandeau
        text.style.paddingRight = (usableHeight * 0.02) + "px"; // 50% de la hauteur du bandeau
        
    });
    
    botT.style.fontSize = (usableHeight * 0.02) + "px"; // 50% de la hauteur du bandeau
    botT.style.height = (usableHeight * 0.04) + "px"; // 50% de la hauteur du bandeau
    botT.style.width = (usableHeight * 0.04) + "px"; // 50% de la hauteur du bandeau

    cell.forEach(el => {
        el.style.fontSize = (usableHeight * 0.1) + "px"; // 50% de la hauteur du bandeau        
    });

    
    botEl.forEach(el => {
        el.style.height = (usableHeight * 0.1) + "px"; // 50% de la hauteur du bandea       
    });
    
    
}

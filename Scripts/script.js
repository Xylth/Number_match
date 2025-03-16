let ga;
let gr;
let baseLife=5;

window.onload = function() {
    // Appeler la fonction à l'ouverture de la page
   init_global();
   adjustBanner();
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

function adjustBanner() {
    const usableHeight = window.innerHeight; // Hauteur utilisable réelle
    const tb = document.querySelector("#topBand");
    const tt = document.querySelector("#topTrans");
    const bt = document.querySelector("#botTrans");
    const bb = document.querySelector("#botBand");
    const ct = document.querySelector("#content");
    


    tb.style.height = (usableHeight * 0.2) + "px";
    tt.style.height = (usableHeight * 0.02) + "px";
    tt.style.top = (usableHeight * 0.2) + "px";
    bt.style.height = (usableHeight * 0.02) + "px";
    bt.style.bottom = (usableHeight * 0.15) + "px";
    bb.style.height = (usableHeight * 0.15) + "px";
    ct.style.height = (usableHeight * 0.65) + "px";
}

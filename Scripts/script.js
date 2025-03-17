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
    const tb = document.querySelector("#topBand");
    const topbtn = document.querySelector("#topBtn");
    const backbtn=document.querySelector("#back");
    const optbtn=document.querySelector("#opt");
    const backImg=document.querySelector("#back img");
    const optImg=document.querySelector("#opt img");

    const sc = document.querySelector("#score");

    const botdata = document.querySelector("#botData");

    const stepsec = document.querySelector("#stepSection");
    const highsec = document.querySelector("#highSection");

    const topText = document.querySelectorAll(".subTopElement");
    const tt = document.querySelector("#topTrans");

    const cell = document.querySelectorAll(".td");
    
    const ct = document.querySelector("#content");
    const bt = document.querySelector("#botTrans");
    const bb = document.querySelector("#botBand");
    const botEl = document.querySelectorAll(".botElement");
    const botT = document.querySelector(".botTag");
    
    


    tb.style.height = (usableHeight * 0.2) + "px";
    tb.style.padding = (usableHeight * 0.01) + "px";
    tb.style.top = "0px";
    topbtn.style.height = (usableHeight * 0.06) + "px";
    
    
    

    backbtn.style.height=(usableHeight * 0.05) + "px";
    backbtn.style.margin=(usableHeight * 0.01) + "px";
    
    optbtn.style.height=(usableHeight * 0.05) + "px";
    helpBtn.style.margin=(usableHeight * 0.01) + "px";
    backImg.style.height=(usableHeight*.05)+"px";
    optImg.style.height=(usableHeight*.05)+"px";
    sc.style.height=(usableHeight * 0.06) + "px";
    sc.fontSize=(usableHeight * 0.06) + "px";

    
    stepsec.style.height = (usableHeight * 0.07) + "px";
    highsec.style.height = (usableHeight * 0.07) + "px";
    topText.forEach(text => {
        text.style.fontSize = (usableHeight * 0.03) + "px"; // 50% de la hauteur du bandeau    
    });

    
    tt.style.height = (usableHeight * 0.02) + "px";
    tt.style.top = (usableHeight * 0.2) + "px";

    ct.style.height = (usableHeight * 0.65) + "px"; 
    ct.style.padding = (usableHeight * 0.05) + "px"; 

    bt.style.height = (usableHeight * 0.02) + "px";
    bt.style.bottom = (usableHeight * 0.15) + "px";
    
    
    bb.style.height = (usableHeight * 0.15) + "px";
    ct.style.height = (usableHeight * 0.65) + "px";
    
}

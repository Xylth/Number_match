let selectedElement=[];

function initBtn(){
    const addBtn = document.getElementById("addBtn");
    const helpBtn = document.getElementById("help");
    const backBtn = document.getElementById("back");
    const optBtn = document.getElementById("opt");
    const resetBtn = document.getElementById("restore");
    const aplBtn = document.getElementById("apply");

    const bck= document.getElementById("bck");
    const brd= document.getElementById("brd");
    const valNum= document.getElementById("valNum");
    const deadNum= document.getElementById("deadNum");
    const clu= document.getElementById("clu");
    

    
    backBtn.addEventListener("click", function() {
        ga.saveGame();
        window.location.href = "https://xylth.github.io/Number_match/"; // Remplace par ton URL
    });

    optBtn.addEventListener("click", function() {
        let menuPan= document.getElementById("menu");
        menuPan.style.display="block"
    });

    addBtn.addEventListener("click", function() {
        addBtn.setAttribute('status',0);
        if (ga.getLife()>0){ 
            gr.fillGrid();
            ga.decLife();
        }
    });

    helpBtn.addEventListener("click", function() {
    
        help();
    });

    
    resetBtn.addEventListener("click", function() {
        localStorage.removeItem("backclr");
        localStorage.removeItem("borderclr");
        localStorage.removeItem("valNum");
        localStorage.removeItem("deadNum");
        localStorage.removeItem("clu");

        let menuPan= document.getElementById("menu");
        menuPan.style.display="none"
        init_custom();
    });

    bck.addEventListener('input', function() {
        localStorage.setItem("backclr", hexToRgb(this.value));
    });

    brd.addEventListener('input', function() {
        localStorage.setItem("borderclr", hexToRgb(this.value));
    });

    valNum.addEventListener('input', function() {
        localStorage.setItem("valNum", hexToRgb(this.value));
    });

    deadNum.addEventListener('input', function() {
        localStorage.setItem("deadNum", hexToRgb(this.value));
    });

    clu.addEventListener('input', function() {
        localStorage.setItem("clu", hexToRgb(this.value));
    });

    
    aplBtn.addEventListener("click", function() {
        let menuPan= document.getElementById("menu");
        menuPan.style.display="none"
        init_custom();
    });

}

function selection_cell(el){
    switch  (el.getStatus()){
        case 1:
            el.setStatus(3);
            selectedElement.push(el); 
            break;
        case 3:
            el.setStatus(1);
            selectedElement.pop(); 
            break;
        case 4:
            el.setStatus(3);
            selectedElement.push(el); 
            break;
    }
    if (selectedElement.length===2){
        check_input();
        clear_help();
    }
}

function hexToRgb(hex) {
    // Supprime le "#" si présent
    hex = hex.replace("#", "");
    
    // Récupère les composantes
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }


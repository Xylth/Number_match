let selectedElement=[];

function initBtn(){
    const addBtn = document.getElementById("addBtn");
    const helpBtn = document.getElementById("help");
    const backBtn = document.getElementById("back");
    const optBtn = document.getElementById("opt");
    const resetBtn = document.getElementById("restore");
    const aplBtn = document.getElementById("apply");
    
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
        
        localStorage.setItem("backclr", "rgb(255, 255, 255)");
        localStorage.setItem("borderclr", "rgb(0, 0, 0)");
        localStorage.setItem("validnumberclr", "rgb(0, 0, 0)");
        localStorage.setItem("deadnmbclr", "rgb(164, 164, 164)");
        localStorage.setItem("clueclr", "rgb(50, 186, 68)");
        let menuPan= document.getElementById("menu");
        menuPan.style.display="none"
        init_custom();
    });

    
    aplBtn.addEventListener("click", function() {
        const bck = document.getElementsByName("bck").values; // récupère le 1er élément avec name="bck"
        const brd = document.getElementsByName("brd").values; // récupère le 1er élément avec name="brd"
        const val = document.getElementsByName("valNum").values; // récupère le 1er élément avec name="valNum"
        const dead = document.getElementsByName("deadNum").values; // récupère le 1er élément avec name="deadNum"
        const clu = document.getElementsByName("clu").values; // récupère le 1er élément avec name="clu"
        localStorage.setItem("backclr", hexToRgb(bck));
        localStorage.setItem("borderclr", hexToRgb(brd));
        localStorage.setItem("validnumberclr",hexToRgb(val));
        localStorage.setItem("deadnmbclr", hexToRgb(dead));
        localStorage.setItem("clueclr",hexToRgb(clu));
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


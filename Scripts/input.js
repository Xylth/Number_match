let selectedElement=[];

function initBtn(){
    const addBtn = document.getElementById("addBtn");
    const helpBtn = document.getElementById("help");
    const backBtn = document.getElementById("back");
    
    backBtn.addEventListener("click", function() {
        window.location.href = "https://xylth.github.io/Number_match/"; // Remplace par ton URL
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




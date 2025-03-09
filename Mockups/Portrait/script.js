window.onload = function() {
    // Appeler la fonction à l'ouverture de la page
    initGrid();
    let a = new game();
};

function initGrid() {
    // Sélectionner le corps du tableau
    const tableBody = document.querySelector('.grid-table tbody');
    const scoreBody = document.querySelector('#score');
    const stepBody = document.querySelector('#step');
    const hsBody = document.querySelector('#highScore');
    const lifeBody = document.querySelector('#life');
    const addBtn = document.getElementById("addBtn");
    const helpBtn = document.getElementById("help");

    addBtn.addEventListener("click", function() {
    
        addBtn.setAttribute('status',0);
        fillGame();
    });

    helpBtn.addEventListener("click", function() {
    
        help();
    });

    addBtn.setAttribute('status',0);
    scoreBody.innerHTML = '0';
    stepBody.innerHTML = '0';
    hsBody.innerHTML = '0';
    lifeBody.innerHTML = '5';
    let chainId = 0;
    //let testStatus = 0;
    // Générer 114 lignes avec 9 colonnes
    for (let i = 0; i <= 113; i++) {
        let row = document.createElement('tr'); // Crée une ligne

        for (let j = 0; j <= 8; j++) {
            let cell = document.createElement('td'); // Crée une cellule
            cell.setAttribute('row', i);
            cell.setAttribute('col', j); 
            cell.setAttribute('status', 0); 
            cell.setAttribute('chainId', chainId); 

            cell.innerHTML = ``;

            /*cell.setAttribute('status', testStatus); 
            testStatus+=1;
            if(testStatus>5)
                testStatus=0;
            
            cell.innerHTML = `${j}`;// Exemple : R1C1*/
            
            cell.addEventListener("click", function() {
                selection_cell(cell);
            });
            row.appendChild(cell); // Ajoute la cellule à la ligne
            chainId+=1;
        }
        tableBody.appendChild(row); // Ajoute la ligne au tableau
    }
    fillGame();
}

function getGrid() {
    let chain = [];
    for (let i = 0;i<114;i++){
        for (let j = 0;j<9;j++){
            const element = getElement(i,j);
            if (element.getValue()===''){
                return chain;
            }
            chain.push(element);
        }
    }
    return chain;
}

function getElement(row,col){
    let status = 0;
    let value = 0;
    const el = document.querySelector(`td[row="${row}"][col="${col}"]`);
    if (el){
        status=el.attributes.status.value;
        value=el.innerHTML;
        const buf = new element(row,col,status,value);
        return buf;
    }
}





function fillGame(){
    const validTds = document.querySelectorAll('td[status]:not([status="0"]):not([status="2"])');
    let stepBody = document.querySelector('#step');
    let lifeBody = document.querySelector('#life');
    let filler =[];
    let cntValue = Array(9).fill(3);
    let step = stepBody.innerHTML;
    let life = lifeBody.innerHTML;
    let sizeNew = 0;
    let randomInt=0;
    let row = 0 ;
    let col =0;
    let chainId=0;
    let chain = getGrid();
    if (validTds.length === 0){
        sizeNew=32;
        life=5;
        stepBody.innerHTML=parseInt(step)+1;
        for (let i = 27; i<sizeNew;i++){
            randomInt = Math.floor(Math.random() * 9);
            cntValue[randomInt]+=1;
        }
    }
    else if (life<1){
        return;
    }
    else {
        life--;
        cntValue = updateCnt(chain);
        for (let i =0; i<cntValue.length;i++){
            sizeNew+=cntValue[i];
        }
    }
    
    lifeBody.innerHTML=life;
    for (let i = 0; i<cntValue.length;i++){
        let index = i+1;
        let qty = cntValue[i];
        while (qty>0){
            filler.push(index);
            qty--;
        }
    }

    
    
    while (filler.length>0){
        let chain = getGrid();
        randomInt = Math.floor(Math.random() * filler.length);
        let value = filler[randomInt];
        if (chain.length>0){
            el = chain.at(-1);
            row = el.getRow();
            col = el.getCol();
            if (col===8){
                row++;
                col=0;
            } 
            else{
                col++;
            }
            chainId=col+(row*9);
        }
        else
        {
            row = 0;
            col =0;
            chainId=0;
        }
        let cell = document.querySelector(`td[row="${row}"][col="${col}"]`);
        cell.setAttribute('row', row);
        cell.setAttribute('col', col); 
        cell.setAttribute('status', 1); 
        cell.setAttribute('chainId', chainId); 

        cell.innerHTML = value;
        filler.splice(randomInt,1);
    }





}

function updateCnt(chain){
    let cntValue = Array(9).fill(0);
    for(let i = 0 ; i<chain.length;i++ ){
        let value = chain[i].getValue();
        let status = chain[i].getStatus();
        if (value === 0){
            break;
        }
        value--;
        if ( status !== "2" ){
            cntValue[value]++;
        }
    }
    return cntValue;
}

function selection_cell(cell){
    switch  (cell.attributes.status.value){
        case "1":
            cell.setAttribute('status', 3); 
            break;
        case "3":
            cell.setAttribute('status', 1); 
            break;
        case "4":
            cell.setAttribute('status', 3); 
            break;
    }
    const selected_cells = document.querySelectorAll('td[status="3"]');
    if (selected_cells.length===2){
        check_input(selected_cells);
    }
}

function check_input(selected_cells){
    
    const lifeBody = document.querySelector('#life');
    const value_a = parseInt( selected_cells[0].innerHTML);
    const value_b = parseInt(selected_cells[1].innerHTML);
    const rowA=parseInt(selected_cells[0].attributes.row.value);
    const rowB=parseInt(selected_cells[1].attributes.row.value);
    const colA=parseInt(selected_cells[0].attributes.col.value);
    const colB=parseInt(selected_cells[1].attributes.col.value);
    const indexA=parseInt(selected_cells[0].attributes.chainId.value);
    const indexB=parseInt(selected_cells[1].attributes.chainId.value);
    let rowL=0;
    let rowH=0;
    let colL=0;
    let colH=0;
    let indexL=0;
    let indexH=0;
    let colD=0;
    let rowD=0;
    let spaced=false;
    let life = lifeBody.innerHTML;


    if ((value_a!==value_b) && ((value_a+value_b)!==10)){
        selected_cells[0].setAttribute('status',5);
        selected_cells[1].setAttribute('status',5);
        setTimeout(() => {
            selected_cells[0].setAttribute('status',1);
            selected_cells[1].setAttribute('status',1);
        }, 2000); // 2000ms = 2 secondes
        
    }else{
        let valid = true;
        if (rowA===rowB){
            if (colA<colB){
                 colL=colA+1;
                 colH=colB;
            }
            else{
                 colL=colB+1;
                 colH=colA;   
            }
            if ((colH-colL)>0){
                spaced= true;
            }
            for(let i =colL;i<colH;i++){
                if (getElement(rowA,i).getStatus()!=="2"){
                    valid=false;
                    break;
                }
            }
        }else if(colA===colB){
            if (rowA<rowB){
                 rowL=rowA+1;
                 rowH=rowB;
            }
            else{
                 rowL=rowB+1;
                 rowH=rowA;   
            }
            if ((rowH-rowL)>0){
                spaced= true;
            }
            for(let i =rowL;i<rowH;i++){
                if (getElement(i,colA).getStatus()!=="2"){
                    valid=false;
                    break;
                }
            }
        }else if(Math.abs(colA-colB)===Math.abs(rowA-rowB)){
            if (colA<colB){
                 colD=1;
            }
            else{
                 colD=-1;  
            }
            if (rowA<rowB){
                 rowD=1;
            }
            else{
                 rowD=-1;  
            }
            
            if (Math.abs((colA-colB))>1){
                spaced= true;
            }
            let i = colD;
            let j = rowD;
            while (colA+i!==colB){
                if(getElement(rowA+j,colA+i).getStatus()!=="2"){
                    valid=false;
                    break;
                }
                i+=colD;
                j+=rowD;
            }
        }else {
            if (indexA<indexB){
                 indexL=indexA+1;
                 indexH=indexB;
            }
            else{
                 indexL=indexB+1;
                 indexH=indexA;   
            }
            
            if ((indexH-indexL)>0){
                spaced= true;
            }
            for(let i =indexL;i<indexH;i++){
                let row=Math.floor(i / 9);
                let col= i%9;
                if (getElement(row,col).getStatus()!=="2"){
                    valid=false;
                    break;
                }
            }
        }
        if (valid===false){
            selected_cells[0].setAttribute('status',5);
            selected_cells[1].setAttribute('status',5);
            setTimeout(() => {
                selected_cells[0].setAttribute('status',1);
                selected_cells[1].setAttribute('status',1);
            }, 2000); // 2000ms = 2 secondes
        }else{
            selected_cells[0].setAttribute('status',2);
            selected_cells[1].setAttribute('status',2);
            if(spaced===true){
                scoring(4);
            }else{
                scoring(1);
            }
            check_line(rowA,rowB);
            if(life===0){
                gameOver();
            }
        }

    }
}

function check_line(rowA,rowB){

    let line_empty = true;
    let rowL=0;
    let rowH=0;

    if (rowA<rowB){
        rowL=rowA;
        rowH=rowB;
   }
   else{
        rowL=rowB;
        rowH=rowA;   
   }
    for (let i = 0; i <= 8; i++) {
        if(getElement(rowH,i).getStatus()!=="2"){
            if(getElement(rowH,i).getStatus()==="0"){
                break;
            }else{
                line_empty=false;
                break;
            }
        }
    }
    if (line_empty===true){
        delete_line(rowH);
    }
    line_empty = true;
    for (let i = 0; i <= 8; i++) {
        if(getElement(rowL,i).getStatus()!=="2"){
            if(getElement(rowL,i).getStatus()==="0"){
                break;
            }else{
                line_empty=false;
                break;
            }
        }
    }
    if (line_empty===true){
        delete_line(rowL);
    }
}

function delete_line(row){
    scoring(10);
    for (let i = row;i<=113;i++)
        for (let j = 0; j <= 8; j++) {
            let current = getElement(i,j);
            if(current.getStatus()==="0"){
                let chain = getGrid();
                if (chain.length===0){
                    fillGame();
                    scoring(150);
                }
                return;
            }else{
                let buf = getElement(i+1,j);
                current.setValue(buf.getValue());
                current.setStatus(buf.getStatus());
                let cell = document.querySelector(`td[row="${i}"][col="${j}"]`);
                cell.setAttribute('status', current.getStatus()); 
                cell.innerHTML = current.getValue();
                
            }
    }
}

function scoring(pts){
    const scoreBody = document.querySelector('#score');
    const stepBody = document.querySelector('#step');
    let score = parseInt(scoreBody.innerHTML);
    let step = parseInt(stepBody.innerHTML);
    score+=step*pts;
    scoreBody.innerHTML = score;

}
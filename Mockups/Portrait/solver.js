function Vsolver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    row++;
    for(let i = row;i<114;i++){
        let buf = getElement(i,col);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }
    }
}

function Hsolver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    col++;
    for(let i = col;i<9;i++){
        let buf = getElement(row,i);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }
    }
}

function Csolver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    do{
        col++;
        if (col>8){
            col=0;
            row++;
            if(row>113){
                return;
            }
        }
        let buf = getElement(row,col);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }

    } while(bufStatus!=="0");
        
}

function D1solver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    do{
        col++;
        row++;
        if ((col>8)||(row>113)){
            return;
        }
        let buf = getElement(row,col);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }

    } while(bufStatus!=="0");
        
}

function D2solver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    do{
        col--;
        row++;
        if ((col<0)||(row>113)){
            return;
        }
        let buf = getElement(row,col);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }

    } while(bufStatus!=="0");
        
}

function globalSolver(){
    let row =0;
    let col = 0;
    let bufStatus=0;
    let solution=[];
    let result;
    do{
        let buf = getElement(row,col);
        bufStatus=buf.getStatus();
        if(bufStatus==="0"){
            return;
        }else if (bufStatus!=="2"){
            result = Vsolver(buf);
            if (result !==undefined ){
                solution.push(buf);
                solution.push(result);
                return solution;
            }
            result = Hsolver(buf);
            if (result !==undefined ){
                solution.push(buf);
                solution.push(result);
                return solution;
            }
            result = Csolver(buf);
            if (result !==undefined ){
                solution.push(buf);
                solution.push(result);
                return solution;
            }
            result = D1solver(buf);
            if (result !==undefined ){
                solution.push(buf);
                solution.push(result);
                return solution;
            }
            result = D2solver(buf);
            if (result !==undefined ){
                solution.push(buf);
                solution.push(result);
                return solution;
            }
        }
        col++;
        if (col>8){
            col=0;
            row++;
            if(row>113){
                return;
            }
        }
    } while(bufStatus!=="0");
}

function help(){
    let row =0;
    let col = 0;
    let bufStatus=0;
    const addBtn = document.getElementById("addBtn");
    
    addBtn.setAttribute('status',0);
    do{
        let buf = getElement(row,col);
        bufStatus=buf.getStatus();
        if(bufStatus==="4"){
            buf.setAttribute('status',1);
        }
        col++;
        if (col>8){
            col=0;
            row++;
            if(row>113){
                bufStatus="0";
            }
        }
    } while(bufStatus!=="0");
    let answer=globalSolver();
    if(answer !== undefined){
        
        let cell1 = document.querySelector(`td[row="${answer[0].getRow()}"][col="${answer[0].getCol()}"]`);
        let cell2 = document.querySelector(`td[row="${answer[1].getRow()}"][col="${answer[1].getCol()}"]`);
        cell1.setAttribute('status',4);
        cell2.setAttribute('status',4);
    }else{
        addBtn.setAttribute('status',1);
    }

}

function gameOver(){
    let result=globalSolver();
    if(result === undefined){
        alert("perdu");
    }
}
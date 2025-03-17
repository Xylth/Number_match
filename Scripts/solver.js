function Vsolver(element){
    let row = element.getRow();
    let col = element.getCol();
    let value = element.getValue();
    let bufValue=0;
    let bufStatus=0;
    row++;
    for(let i = row;i<114;i++){
        let buf = gr.getElementCoordinates(i,col);
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
        let buf = gr.getElementCoordinates(row,i);
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
        let buf = gr.getElementCoordinates(row,col);
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
        let buf = gr.getElementCoordinates(row,col);
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
        let buf = gr.getElementCoordinates(row,col);
        bufValue=buf.getValue();
        bufStatus=buf.getStatus();
        if(bufStatus===0){
            return;
        }else if (bufStatus!==2){
            if ((bufValue===value) ||(value+bufValue===10)){
                return buf;
            }else{
                return;
            }
        }

    } while(bufStatus!==0);
        
}

function globalSolver(){
    let row =0;
    let col = 0;
    let bufStatus=0;
    let solution=[];
    let result;
    do{
        let buf = gr.getElementCoordinates(row,col);
        bufStatus=buf.getStatus();
        if(bufStatus===0){
            return;
        }else if (bufStatus!==2){
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
    } while(bufStatus!==0);
}

function help(){
    let row =0;
    let col = 0;
    let buf;
    let bufStatus=0;
    const addBtn = document.getElementById("addBtn");

    clear_help();
    
    addBtn.setAttribute('status',0);
    do{
        buf = gr.getElementCoordinates(row,col);
        bufStatus=buf.getStatus();
        if(bufStatus===4){
            buf.setStatus(1);
        }
        col++;
        if (col>8){
            col=0;
            row++;
            if(row>113){
                bufStatus=0;
            }
        }
    } while(bufStatus!==0);
    let answer=globalSolver();
    if(answer !== undefined){
        answer[0].setStatus(4);
        
        answer[1].setStatus(4);
        ga.addScore(-10);

    }else{
        addBtn.setAttribute('status',1);
    }

}

function clear_help(){
    let buf;
    let i=0;
    do{
        buf=gr.getElementChain(i);
        if(buf.getStatus()===4){
            buf.setStatus(1);
        }
        i++;
    }while(buf.getStatus()!==0);
}

function gameOver(){
    let result=globalSolver();
    if(result === undefined){
        alert("perdu");
    }
}
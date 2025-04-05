class grid{

    constructor(){
        this.chain=[];
        const tableBody = document.querySelector('.grid-table tbody');
        // Générer 114 lignes avec 9 colonnes
        for (let i = 0; i <= 113; i++) {
            let row = document.createElement('tr'); // Crée une ligne

            for (let j = 0; j <= 8; j++) {
                let cell = document.createElement('td'); // Crée une cellule
                let el = new element(cell);
                el.setCoordinates(i,j);
                //cell.addEventListener("click", function() {
                //    selection_cell(cell);
                //});
                row.appendChild(cell); // Ajoute la cellule à la ligne
                this.chain.push(el);
            }
            tableBody.appendChild(row); // Ajoute la ligne au tableau
        }

    }

    clear_grid(){
        for(let i = 0;i<1026;i++){
            let buf = this.chain[i];
            if(buf.getStatus()!==0){
                buf.setValue(0);
            }
            else{
                return;
            }
        }
    }

    getElementChain(val){
        if((val>-1)&&(val<1026)){
            return this.chain[val];
        } else {
            return; 
        }
    }

    getElementCoordinates(row,col){
       let val;
        if(((row>-1)&&(row<114))&&((col>-1)&&(col<9))){
            val = row*9 + col;
            return this.getElementChain(val);
        } else {
            return; 
        }
    }

    updateCnt(){
        this.cnt= new Array(9).fill(0);
        let i = 0;
        let j = 0;
        let value=0;
        lvl = Number(LocalStorage.getItem("level"));
        do{
            let el = this.chain[i];
            value = el.getValue();
            let status = el.getStatus();
            if ((status!==0)&&(status!==2)){
                this.cnt[value-1]++;
                j++;
            }
            i++;
        } while((value!==0));
        if(j===0){
            for(let i =0;i<9;i++){
                this.cnt[i]=lvl;
                j+=lvl;
            }
            for(let i=j;i<32;i++){
                let randomInt = Math.floor(Math.random() * 9);
                this.cnt[randomInt]++;
            }
        }
        return this.cnt;
    }

    fillGrid(){
        this.updateCnt();
        let buf=[];
        for (let i = 0;i<9;i++){
            for(let j=0;j<this.cnt[i];j++){
                buf.push(i+1);
            }
        }
        for (let i = 0;i<1026;i++){
            let status = this.chain[i].getStatus();
            if (status===0){
                if (buf.length>0){
                    let randomInt  = Math.floor(Math.random() * buf.length);
                    this.chain[i].setValue(buf[randomInt]);
                    this.chain[i].setStatus(1);
                    buf.splice(randomInt,1);
                }
                else{
                    return;
                }
            }
        }
    }

    delete_line(row){
        let buf;
        let bufNext;
        do{
            for(let i=0;i<9;i++){
                buf=this.getElementCoordinates(row,i);
                bufNext=this.getElementCoordinates(row+1,i)
                buf.setValue(bufNext.getValue());
                buf.setStatus(bufNext.getStatus());
            }
            row++;
            if (row===113){
                for(let i=0;i<9;i++){
                    buf=this.getElementCoordinates(row,i);
                    buf.setValue(0);
                    
                }
                return;
            }
        }while(bufNext.getStatus()!==0);
        for(let i=0;i<9;i++){
            buf=this.getElementCoordinates(row,i);
            bufNext=this.getElementCoordinates(row+1,i)
            buf.setValue(bufNext.getValue());
            buf.setStatus(bufNext.getStatus());
        }
    }   

    export_value(){
        let str="";
        let i=0;
        while (this.chain[i].getValue()!==0){
            str+=this.chain[i].getValue();
            i++;
        }
        localStorage.setItem("grid_val", str);
    }
    
    export_status(){
        let str="";
        let i=0;
        while (this.chain[i].getStatus()!==0){
            str+=this.chain[i].getStatus();
            i++;
        }
        localStorage.setItem("grid_sta", str);
    }
}
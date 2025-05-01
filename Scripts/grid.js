class grid{

    constructor(){
        this.chain=[];
        const tableBody = document.querySelector('.grid-table tbody');
        let pair = 0;
        // Générer 114 lignes avec 9 colonnes
        for (let i = 0; i <= 113; i++) {
            let row = document.createElement('tr'); // Crée une ligne

            for (let j = 0; j <= 8; j++) {
                let cell = document.createElement('td'); // Crée une cellule
                let el = new element(cell);
                el.setCoordinates(i,j);
                el.setPair(pair);
                if(pair===0){
                    pair=1;
                }
                else{
                    pair=0;
                }
                row.appendChild(cell); // Ajoute la cellule à la ligne
                this.chain.push(el);
            }
            tableBody.appendChild(row); // Ajoute la ligne au tableau
        }

    }

    clearGrid(){
        for(let i=0;i<1026;i++){
            this.chain[i].setValue(0);
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

    startGrid(){
        data.gameSaved.grid= [];
        let buf=[];
        let base=3;
        switch (data.gameSaved.mode) {
            case "facile":
                base=3;
                break;
        
            case "moyen":
                base=2;
                break;
        
            case "difficile":
                base=1;
                break;
        
        }
        for(let i =1;i<10;i++){
            let bufbase = new Array(base).fill(i);
            buf.push(...bufbase);
        }
        while(buf.length<32){
            let randomInt = Math.floor(Math.random() * 9)+1;
            buf.push(randomInt);
        }
        for(let i = 0 ; i<32;i++){
            let randomInt = Math.floor(Math.random()*buf.length);
            this.chain[i].setValue(buf[randomInt]);
            this.chain[i].setStatus(1);
            data.gameSaved.grid.push({ 
                value: buf[randomInt], 
                status: 1 
            });
            buf.splice(randomInt,1);
        }

    }

    feedGrid(){
        let buf=[];
        let i = -1;
        let el;
        do{
            i++;
            el=this.chain[i].getItem();
            if((el.status!==0)&&(el.status!==2)){
                buf.push(el.value);
            }
        }while(el.status!==0);
        while(buf.length>0){
            let randomInt = Math.floor(Math.random()*buf.length);
            this.chain[i].setValue(buf[randomInt]);
            this.chain[i].setStatus(1);
            data.gameSaved.grid.push({ 
                value: buf[randomInt], 
                status: 1 
            });
            buf.splice(randomInt,1);
            i++;
        }
    }

    delete_line(row){
        let index = row*9;
        this.clearGrid();
        data.gameSaved.grid.splice(index,9);
        this.restoreGrid();
    }   

    saveGrid() {
        data.gameSaved.grid=[];
        let el;
        let i = -1;
    
        do {
            i++
            el = this.chain[i].getItem();
            
            if (el.status !== 0) {
                data.gameSaved.grid.push({ 
                    value: el.value, 
                    status: el.status 
                });
            }
        } while (el.status !== 0);
    }
    
    restoreGrid(){
        for(let i=0;i<data.gameSaved.grid.length;i++){
            this.chain[i].setValue(data.gameSaved.grid[i].value);
            this.chain[i].setStatus(data.gameSaved.grid[i].status);
        }
    }
}
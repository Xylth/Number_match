class element{
    constructor(cell){
        this.cell=cell;
        this.row=0;
        this.col=0;
        this.chainId=0;
        this.pair=0;
        this.setValue(0);
        this.cell.addEventListener("click", () => {
            selection_cell(this); 
        });
    }

    getRow(){
        return this.row;
    }

    getCol(){
        return this.col;
    }

    getStatus(){
        return this.status;
    }

    getValue(){
        return this.value;
    }

    getChainId(){
        return this.chainId;
    }

    getCell(){
        return this.cell;
    }

    setValue(val){
        if ((val>0)&&(val<10)){
            this.value=val;
            this.cell.innerHTML=this.value;
        }
        if (val===0){
            this.value=val;
            this.cell.innerHTML="";
            this.setStatus(0);
        }
        return this.value;
    }

    setStatus(val){
        if ((val>-1)&&(val<6)){
            this.status=val;
            this.cell.setAttribute('status', this.status);
        }
        return this.status;
    }

    setChainId(val){
        this.chainId=val;
        if (val % 2 !==0){
            this.pair=0;
        }else{
            this.pair=1;
        }

        this.row=Math.floor(val / 9);
        this.col= val%9;
    }

    setCoordinates(row,col){
        this.row=row;
        this.col=col;
        this.chainId=row*9+col;
        if (this.chainId % 2 !==0){
            this.pair=0;
        }else{
            this.pair=1;
        }
    }
}
function init_custom(){

    document.documentElement.style.setProperty("--bck-color",data.colors.bckcolor);
    document.documentElement.style.setProperty("--score-color",data.colors.scorecolor);
    document.documentElement.style.setProperty("--subtxt-color",data.colors.subtxtcolor);
    document.documentElement.style.setProperty("--btn-color",data.colors.btncolor);
    document.documentElement.style.setProperty("--border-color",data.colors.bordercolor);
    document.documentElement.style.setProperty("--bckpair-color",data.colors.bckpaircolor);
    document.documentElement.style.setProperty("--bckimpair-color",data.colors.bckimpaircolor);
    document.documentElement.style.setProperty("--selection-color",data.colors.selectioncolor);
    document.documentElement.style.setProperty("--clue-color",data.colors.cluecolor);
    document.documentElement.style.setProperty("--fail-color",data.colors.failcolor);
    document.documentElement.style.setProperty("--valnmb-color",data.colors.valnmbcolor);
    document.documentElement.style.setProperty("--deadnmb-color",data.colors.deadnmbcolor);
    document.documentElement.style.setProperty("--selnmb-color",data.colors.selnmbcolor);
    document.documentElement.style.setProperty("--cluenmb-color",data.colors.cluenmbcolor);
    document.documentElement.style.setProperty("--failnmb-color",data.colors.failnmbcolor);


    saveData();
}
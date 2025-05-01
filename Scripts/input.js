let selectedElement=[];

function initBtn(){
    debug =0;
    const addBtn = document.getElementById("addBtn");
    const helpBtn = document.getElementById("help");
    const backBtn = document.getElementById("back");
    const optBtn = document.getElementById("opt");
    const resetBtn = document.getElementById("restore");
    const aplBtn = document.getElementById("apply"); 

    
    backBtn.addEventListener("click", function() {
        ga.saveGame();
        window.location.href = menu;
    });

    optBtn.addEventListener("click", function() {
        let menuPan= document.getElementById("menu");
        menuPan.style.display="block";
        document.getElementById("bck").value = rgbToHex(data.colors.bckcolor);
        document.getElementById("scor").value = rgbToHex(data.colors.scorecolor);
        document.getElementById("subtxt").value = rgbToHex(data.colors.subtxtcolor);
        document.getElementById("btn").value = rgbToHex(data.colors.btncolor);
        document.getElementById("brd").value = rgbToHex(data.colors.bordercolor);
        document.getElementById("bckpair").value = rgbToHex(data.colors.bckpaircolor);
        document.getElementById("bckimpair").value = rgbToHex(data.colors.bckimpaircolor);
        document.getElementById("sel").value = rgbToHex(data.colors.selectioncolor);
        document.getElementById("clu").value = rgbToHex(data.colors.cluecolor);
        document.getElementById("fail").value = rgbToHex(data.colors.failcolor);
        document.getElementById("valNum").value = rgbToHex(data.colors.valnmbcolor);
        document.getElementById("deadNum").value = rgbToHex(data.colors.deadnmbcolor);
        document.getElementById("selNum").value = rgbToHex(data.colors.selnmbcolor);
        document.getElementById("cluNum").value = rgbToHex(data.colors.cluenmbcolor);
        document.getElementById("failNum").value = rgbToHex(data.colors.failnmbcolor);

    });

    addBtn.addEventListener("click", function() {
        addBtn.setAttribute('status',0);
        ga.feeder();
    });

    helpBtn.addEventListener("click", function() {
    
        help();
    });

    
    resetBtn.addEventListener("click", function() {
        data.colors = { ...defaultColors };


        let menuPan= document.getElementById("menu");
        menuPan.style.display="none";
        init_custom();
    });
    
    aplBtn.addEventListener("click", function() {
        let menuPan= document.getElementById("menu");
        data.colors.bckcolor = hexToRgb(document.getElementById("bck").value);
        data.colors.scorecolor = hexToRgb(document.getElementById("scor").value);
        data.colors.subtxtcolor = hexToRgb(document.getElementById("subtxt").value);
        data.colors.btncolor = hexToRgb(document.getElementById("btn").value);
        data.colors.bordercolor = hexToRgb(document.getElementById("brd").value);
        data.colors.bckpaircolor = hexToRgb(document.getElementById("bckpair").value);
        data.colors.bckimpaircolor = hexToRgb(document.getElementById("bckimpair").value);
        data.colors.selectioncolor = hexToRgb(document.getElementById("sel").value);
        data.colors.cluecolor = hexToRgb(document.getElementById("clu").value);
        data.colors.failcolor = hexToRgb(document.getElementById("fail").value);
        data.colors.valnmbcolor = hexToRgb(document.getElementById("valNum").value);
        data.colors.deadnmbcolor = hexToRgb(document.getElementById("deadNum").value);
        data.colors.selnmbcolor = hexToRgb(document.getElementById("selNum").value);
        data.colors.cluenmbcolor = hexToRgb(document.getElementById("cluNum").value);
        data.colors.failnmbcolor = hexToRgb(document.getElementById("failNum").value);
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

function recolorImage(imgElement, newColor) {
    const originalSrc = imgElement.dataset.originalSrc;
  
    const baseImg = new Image();
    baseImg.crossOrigin = "anonymous"; // utile si l'image vient d’un autre domaine
    baseImg.src = originalSrc + "?t=" + Date.now(); // évite le cache
  
    baseImg.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = baseImg.naturalWidth;
      canvas.height = baseImg.naturalHeight;
      const ctx = canvas.getContext("2d");
  
      ctx.drawImage(baseImg, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
  
      for (let i = 0; i < data.length; i += 4) {
        const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
        if (r < 20 && g < 20 && b < 20 && a > 0) {
          data[i] = newColor.r;
          data[i + 1] = newColor.g;
          data[i + 2] = newColor.b;
        }
      }
  
      ctx.putImageData(imageData, 0, 0);
      imgElement.src = canvas.toDataURL();
    };
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

  function rgbToHex(rgb) {
    let result = rgb.match(/\d+/g);
    return "#" + result.map(x => {
        let hex = parseInt(x).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }).join('');
}


function rgbStringToObject(rgbStr) {
    const match = rgbStr.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/);
    if (!match) return { r: 0, g: 0, b: 0 }; // fallback
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  }


let selectedMode = 0;

window.onload = function() {
    const backBtn = document.getElementById("back");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    
    selectedMode = 0;

    if (localStorage.getItem("hsdata") === null) {
        localStorage.setItem("hsdata", JSON.stringify(hs_data));
    } 
    hs_data = JSON.parse(localStorage.getItem("hsdata"));

    backBtn.addEventListener("click", function() {
        window.location.href = menu;
    });

    leftBtn.addEventListener("click", async function() {
        if (!hs_data.loading) {  // Vérifie si la requête est en cours
            await checkHs();  // Attendre que les données soient chargées avant de continuer
            selectedMode--;
            if (selectedMode < 0) {
                selectedMode = hs_data.board.length - 1;
            }
            updateBoard();
        }
    });

    rightBtn.addEventListener("click", async function() {
        if (!hs_data.loading) {  // Vérifie si la requête est en cours
            await checkHs();  // Attendre que les données soient chargées avant de continuer
            selectedMode++;
            if (selectedMode >= hs_data.board.length) {
                selectedMode = 0;
            }
            updateBoard();
        }
    });

    checkHs(); // Charger les données dès le départ
    updateBoard();  // Mettre à jour le tableau avec les données initiales
};

function updateBoard() {
    const tableBody = document.querySelector('.board-content');
    tableBody.innerHTML = "";  // Vider le corps du tableau avant de le remplir à nouveau

    const modeData = hs_data.board[selectedMode];
    document.querySelector('.header-title').textContent = modeData.mode;  // Met à jour le titre du mode

    modeData.top.forEach((entry, index) => {
        let row = document.createElement('tr');
        
        let rankCell = document.createElement('td');
        rankCell.textContent = index + 1;  // Rang (1, 2, 3...)
        row.appendChild(rankCell);

        let nameCell = document.createElement('td');
        nameCell.textContent = entry.pseudo;  // Nom du joueur
        row.appendChild(nameCell);

        let scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score;  // Score du joueur
        row.appendChild(scoreCell);

        tableBody.appendChild(row);  // Ajouter la ligne au tableau
    });
}



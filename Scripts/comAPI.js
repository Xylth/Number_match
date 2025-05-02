async function checkHs() {
    let currentDate = new Date().toLocaleDateString('fr-FR');
    let currentHour = new Date().getHours();  // Récupère l'heure actuelle
    let currentQuarter = Math.floor(currentHour / 6);  // Divise l'heure par 6 pour obtenir le trimestre
    let corruptHs = corruptCheck();

    if ((corruptHs) || (hs_data.last_update.day !== currentDate) || (hs_data.last_update.quarter !== currentQuarter)) {
        hs_data.loading = true;  // Indique que les données sont en cours de chargement
        await getHs();  // Attendre la récupération des données avant de continuer
        hs_data.last_update.day = currentDate;
        hs_data.last_update.quarter = currentQuarter;
        saveHS();
    }
}

async function getHs() {
    try {
        let urlBase = "https://script.google.com/macros/s/AKfycbxpMivvYrwHe9twhKSoLauLU6u0skRagC8frF-rtDLZZeOKIwS5KT7nj-qYIzNTf061ew/exec"; // L'URL de votre API
        let url = new URL(urlBase);
        url.searchParams.append("isTest", isTest);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        const data = await response.json(); // Analyse la réponse JSON
        
        // Initialiser les tableaux pour chaque mode dans hs_data.board
        hs_data.board = gameModes.map(mode => ({
            mode: mode,
            top: []  // Initialise un tableau vide pour chaque mode
        }));

        // Pour chaque élément dans la réponse, ajoutez-le dans le tableau correspondant au mode
        data.forEach(entry => {
            const modeIndex = gameModes.indexOf(entry.mode);
            if (modeIndex !== -1) {
                entry.scores.forEach(scoreEntry => {
                    hs_data.board[modeIndex].top.push({
                        pseudo: scoreEntry.pseudo,
                        score: scoreEntry.score
                    });
                });
            }
        });
    } catch (error) {
        console.error('Erreur:', error); // Gérez les erreurs
    } finally {
        hs_data.loading = false;  // La requête est terminée
    }
}

function corruptCheck() {
    if (hs_data.board.length !== gameModes.length) {
        localStorage.removeItem("hsdata");
        return true;
    }
    for (let i = 0; i < hs_data.board.length; i++) {
        if (hs_data.board[i].mode !== gameModes[i]) {
            localStorage.removeItem("hsdata");
            return true;
        }
        if (hs_data.board[i].top.length === 0) {
            localStorage.removeItem("hsdata");
            return true;
        }
    }
    return false;
}



function sendScore() {
    let urlBase = "https://script.google.com/macros/s/AKfycbxpMivvYrwHe9twhKSoLauLU6u0skRagC8frF-rtDLZZeOKIwS5KT7nj-qYIzNTf061ew/exec"; // L'URL de votre API
    let url = new URL(urlBase);
    url.searchParams.append("isTest", isTest);

    const content = {
        mode: ga.getMode(),
        pseudo: data.conf.pseudo,
        score: ga.getScore()
    };

    fetch(url, {
        method: "POST",
        mode: "no-cors", // Requête opaque
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
    });
}

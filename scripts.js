
function openGame(gameName) {
    const gameLinks = {
        "subway-surfers": "https://ly4fsf.csb.app/",
        "basket-random": "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/basket-random/basran.xml&container=ig",
        "drive-mad": "https://drivemad.me/iframe/index.html"
        // Add more games here
    };
    const gameFrame = document.getElementById("game-frame");
    gameFrame.src = gameLinks[gameName];
    document.getElementById("game-modal").classList.remove("hidden");
}

function closeGame() {
    const gameFrame = document.getElementById("game-frame");
    gameFrame.src = "";
    document.getElementById("game-modal").classList.add("hidden");
}

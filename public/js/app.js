var GAME = {};
GAME.data = {};

function newGame() 
{
    console.log("Game started!");
    GAME.player = new GAME.Player();
    GAME.world = new GAME.World();
    GAME.WorldController.newLevel();
}

window.onload = newGame;
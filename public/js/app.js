var GAME = {};
GAME.data = {};

GAME.newGame = function() 
{
    console.log("Game started!");
    GAME.player = new GAME.Player();
    GAME.world = new GAME.World();
    GAME.WorldController.newLevel();
};

window.onload = GAME.newGame;
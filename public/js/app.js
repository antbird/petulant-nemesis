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

//implement Fisher-Yates algorithm for array shuffling
Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i == 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};
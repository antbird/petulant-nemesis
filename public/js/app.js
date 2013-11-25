var GAME = {
    data: {},
    views: {},
    models: {},
    controllers: {}
};


GAME.newGame = function() 
{
    console.log("Game started!");
    GAME.player = new GAME.models.Player();
    GAME.world = new GAME.models.World();
    GAME.controllers.World.newLevel();
};

window.onload = GAME.newGame;
window.onkeyup = function(e) {
    GAME.controllers.Keyboard.dispatcher(e);
}

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
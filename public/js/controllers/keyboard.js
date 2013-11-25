GAME.controllers.Keyboard =
{
    dispatcher: function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key === 37 || key === 65) {
            GAME.controllers.Player.move('W');
        } else if (key === 38 || key === 87) {
            GAME.controllers.Player.move('N');
        } else if (key === 39 || key === 68) {
            GAME.controllers.Player.move('E');
        } else if (key === 40 || key === 83) {
            GAME.controllers.Player.move('S');
        }
    }
};
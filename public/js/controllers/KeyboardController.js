GAME.KeyboardController =
{
    dispatcher: function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key === 37 || key === 65) {
            GAME.PlayerController.move('W');            
        } else if (key === 38 || key === 87) {            
            GAME.PlayerController.move('N');
        } else if (key === 39 || key === 68) {
            GAME.PlayerController.move('E');
        } else if (key === 40 || key === 83) {
            GAME.PlayerController.move('S');
        }
        
    }
    
};
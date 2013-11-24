GAME.PlayerController =
{
    move: function(dir) {        
        GAME.MovementController.move(dir,GAME.world.level.player);        
        GAME.WorldView.renderPlayer();
    }
    

};
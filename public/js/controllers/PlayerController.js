GAME.PlayerController =
{
    move: function(dir) {
        GAME.MovementController.move(dir,GAME.player);
        GAME.WorldView.renderPlayer();
    }
};
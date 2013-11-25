GAME.controllers.Player =
{
    move: function(dir) {
        GAME.controllers.Movement.move(dir,GAME.player);
        GAME.views.World.renderPlayer();
    }
};
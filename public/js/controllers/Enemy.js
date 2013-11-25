GAME.controllers.Enemy =
{
    newEnemy: function(enemy){
        GAME.world.enemies.push(new GAME.models.Enemy(enemy));
    }
};

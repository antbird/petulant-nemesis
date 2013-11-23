GAME.EnemyController =  
{
    newEnemy: function(enemy){
        GAME.World.enemies.push(new GAME.Enemy(enemy));
    }   
    
};
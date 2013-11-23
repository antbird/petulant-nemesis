GAME.Enemy = function(enemy)
{   
    this.id = ++GAME.world.counters.enemies;
    this.enemy_id = enemy.id;
    this.name = enemy.name;
    this.level = Math.floor(Math.random()*((GAME.world.counters.level*1.2)-(GAME.world.counters.level*0.85)+1)+(GAME.world.counters.level*0.85));
    
    this.attack = Math.ceil(this.level * enemy.attack);
    this.defense = Math.ceil(this.level * enemy.defense);

    this.resistances = function(){
        return GAME.data.enemies[this.enemy_id].resistances;
    };
    
    this.weaknesses = function(){
        return GAME.data.enemies[this.enemy_id].weaknesses;
    };
};
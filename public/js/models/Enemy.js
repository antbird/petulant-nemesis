GAME.Enemy = function(enemy)
{   
    this.id = ++GAME.World.enemy_counter;
    this.enemy_id = enemy.id;
    this.name = enemy.name;
    this.level = Math.floor(Math.random()*((GAME.World.level*1.2)-(GAME.World.level*0.85)+1)+(GAME.World.level*0.85));
    
    this.attack = Math.ceil(this.level * enemy.attack);
    this.defense = Math.ceil(this.level * enemy.defense);

    this.resistances = function(){
        return GAME.data.enemies[this.enemy_id].resistances;
    };
    
    this.weaknesses = function(){
        return GAME.data.enemies[this.enemy_id].weaknesses;
    };
};
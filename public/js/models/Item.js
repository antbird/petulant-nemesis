GAME.models.Item = function(item)
{
    this.id = ++GAME.world.counters.items;
    this.item_id = item.id;
    this.name = item.name;    
};
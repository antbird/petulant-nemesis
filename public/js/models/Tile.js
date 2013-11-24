GAME.Tile = function(tile) 
{
    this.id = ++GAME.world.counters.tiles;
    this.tile_id = tile.id;
    this.name = tile.name;
    this.class_name = tile.class_name;
    this.solid = tile.solid;
};
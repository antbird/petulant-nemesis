GAME.TileController =  
{
    newTile: function(type){
        if (type !== 0) {
            return new GAME.Tile(GAME.data.tiles[type]);
        }
        var tile_id = Math.floor(Math.random() * 3) + 1;
        if (tile_id === 3) {
            tile_id = Math.floor(Math.random() * 3) + 1;
        }
        var tile = GAME.data.tiles[tile_id];
        return new GAME.Tile(tile);
    }   
    
};
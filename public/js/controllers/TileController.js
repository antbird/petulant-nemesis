GAME.TileController =  
{
    newTile: function(){
        var tile_id = Math.floor(Math.random() * 3) + 1;
        if (tile_id === 3) {
            tile_id = Math.floor(Math.random() * 3) + 1;
        }
        var tile = GAME.data.tiles[tile_id];
        return new GAME.Tile(tile);
    }   
    
};
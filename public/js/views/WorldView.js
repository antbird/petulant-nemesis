GAME.WorldView = 
{
    renderTiles: function() {
        var container = document.getElementById("world");        
        var tiles = '';
        GAME.world.level.tiles.forEach(function (column) 
        {
            column.forEach(function (tile) {                
                tiles += "<span id=\"tile_" + tile.id + "\" class=\"" + GAME.data.tiles[tile.tile_id].class_name + "\"></span>\n";                
            });
            tiles += "<br/>";            
        });
        container.innerHTML = tiles;
    },
    
    renderPlayer: function() {
        this.unrenderPlayer();
        var tile = GAME.world.level.tiles[GAME.world.level.player.y][GAME.world.level.player.x],
            container = document.getElementById("tile_" + tile.id);        
        container.innerHTML = "<img id=\"player\" src=\"http://thechetfaliszeks.com/petulance/img/player.png\">";
    },
    
    unrenderPlayer: function() {
        if (document.getElementById("player"))
            document.getElementById("player").remove();
    }
};
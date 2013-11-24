GAME.WorldView = 
{
    render: function() {
        var container = document.getElementById("world");        
        var tiles = '';
        GAME.world.level.tiles.forEach(function (column) 
        {
            column.forEach(function (tile) {                
                tiles += "<span id=\"tile_" + tile.id + "\" class=\"tile tile-" + GAME.world.tile_size + " " + tile.class_name + "\"></span>\n";                
            });
            tiles += "<br/>";            
        });
        container.innerHTML = tiles;
    }
};
GAME.views.World = 
{
    renderTiles: function() {
        var container = document.getElementById("world");
        var tiles = '';
        GAME.world.tiles.forEach(function (column)
        {
            column.forEach(function (tile) {
                tiles += "<span id=\"tile_" + tile.id + "\" class=\"" + GAME.data.Tile[tile.tile_id].class_name + "\"></span>\n";
            });
            tiles += "<br/>";
        });
        container.innerHTML = tiles;
    },

    renderPlayer: function() {
        this.unrenderPlayer();
        var tile = GAME.world.tiles[GAME.player.y][GAME.player.x],
            container = document.getElementById("tile_" + tile.id);
        container.innerHTML = "<img id=\"player\" src=\"http://thechetfaliszeks.com/petulance/img/player.png\">";
    },

    unrenderPlayer: function() {
        if (document.getElementById("player"))
            document.getElementById("player").remove();
    }
};
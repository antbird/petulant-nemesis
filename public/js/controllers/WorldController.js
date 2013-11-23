GAME.WorldController =
{
    newLevel: function() 
    {
        ++GAME.world.counters.level;        
        this.generateTiles();
        this.renderWorld();
    },
    
    generateTiles: function() 
    {
        GAME.world.tiles = [];
        for (var h = 0; h < GAME.world.height; h++)
        {
            GAME.world.tiles[h] = [];
            for (var w = 0; w < GAME.world.width; w++)
            {
                GAME.world.tiles[h][w] = GAME.TileController.newTile();
            }
        }        
    },

    renderWorld: function() 
    {
        GAME.WorldView.render();
    }

};
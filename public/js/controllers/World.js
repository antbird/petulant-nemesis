GAME.controllers.World =
{
    newLevel: function() {
        ++GAME.world.counters.level;
        this.generateMap();
        this.generateRooms(GAME.world.max_room_count);
        this.generateHallways(GAME.world.max_room_count);
        
        GAME.world.nonsolid_tiles.shuffle();

        this.spawnPlayer();
        this.spawnEnemies();
        
        this.renderWorld();
    },
    
    generateMap: function() {
        GAME.world.tiles = [];
        GAME.world.nonsolid_tiles = [];
        GAME.world.counters.tiles = 0;
        for (var y = 0; y < GAME.world.height; y++)
        {
            GAME.world.tiles[y] = [];
            for (var x = 0; x < GAME.world.width; x++)
            {                
                GAME.world.tiles[y][x] = this.generateTile(2); //fills all spaces with a wall tile, update later                
            }
        }
    },
    
    generateRooms: function(numRooms) {
        GAME.world.rooms = [];
        for (var i =0; i < numRooms; i++) {
            GAME.world.rooms[i] = GAME.controllers.Room.newRoom();
            for(var y = GAME.world.rooms[i].y; y < GAME.world.rooms[i].y + GAME.world.rooms[i].h; y++) {
                for(var x = GAME.world.rooms[i].x; x < GAME.world.rooms[i].x + GAME.world.rooms[i].w; x++) {
                    if (GAME.world.tiles[y][x].tile_id === 2) { //if this is a wall
                        GAME.world.tiles[y][x] = this.generateTile(1);
                        GAME.world.nonsolid_tiles.push({'y':y,'x':x});
                    }
                }
            }
        }
    },
    
    generateHallways: function(numRooms) {       
        for (var i = 0; i < numRooms; i++) {
            var roomA = GAME.world.rooms[i],
                pointA = {
                    x: Math.floor(Math.random()*roomA.w) + roomA.x,
                    y: Math.floor(Math.random()*roomA.h) + roomA.y
                },
                roomNum = i;

            while(roomNum == i){
                roomNum = Math.floor(Math.random()*GAME.world.rooms.length);
            }

            var roomB = GAME.world.rooms[roomNum],
                pointB = {
                    x: Math.floor(Math.random()*roomB.w) + roomB.x,
                    y: Math.floor(Math.random()*roomB.h) + roomB.y
                };
                
            while (pointB.x !== pointA.x || pointB.y !== pointA.y){
                if (Math.random()*100 < 33){
                    if (pointB.x !== pointA.x){
                        if(pointB.x > pointA.x){
                            pointB.x--;
                        } else {
                            pointB.x++;
                        }
                    }
                } else if(pointB.y !== pointA.y){
                    if(pointB.y > pointA.y){
                        pointB.y--;
                    } else {
                        pointB.y++;
                    }
                }

                if(pointB.x < GAME.world.width && pointB.y < GAME.world.width) {
                    GAME.world.tiles[pointB.y][pointB.x] = this.generateTile(1);
                    GAME.world.nonsolid_tiles.push({'y':pointB.y,'x':pointB.x});
                }
            }
        }        
    },    
    
    generateTile: function(tile_id) {
        //add some logic here to determine which tiles to use
        return {id: ++GAME.world.counters.tiles, tile_id: tile_id};
        //return GAME.TileController.newTile(1);
    },    
    
    
    spawnPlayer: function() {
        var tile = GAME.world.nonsolid_tiles.pop();
        GAME.player.y = tile.y;
        GAME.player.x = tile.x;
    },

    spawnEnemies: function() {

    },

    renderWorld: function() {
        GAME.views.World.renderTiles();
        GAME.views.World.renderPlayer();
    }
};
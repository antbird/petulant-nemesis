GAME.WorldController =
{
    newLevel: function() {
        ++GAME.world.counters.level;
        this.generateMap();
        this.generateRooms(GAME.world.roomcount);  
        this.generateHallways(GAME.world.roomcount);
        
        GAME.world.level.nonsolid_tiles.shuffle();

        this.spawnPlayer();
        this.spawnEnemies();
        
        this.renderWorld();
    },
    
    generateMap: function() {
        GAME.world.level.tiles = [];
        GAME.world.level.nonsolid_tiles = [];
        GAME.world.counters.tiles = 0;
        for (var y = 0; y < GAME.world.height; y++)
        {
            GAME.world.level.tiles[y] = [];
            for (var x = 0; x < GAME.world.width; x++)
            {                
                GAME.world.level.tiles[y][x] = this.generateTile(2); //fills all spaces with a wall tile, update later                
            }
        }        
    },
    
    generateRooms: function(numRooms) {
        GAME.world.level.rooms = [];
        for (var i =0; i < numRooms; i++) {
            GAME.world.level.rooms[i] = GAME.RoomController.newRoom();
            for(var y = GAME.world.level.rooms[i].y; y < GAME.world.level.rooms[i].y + GAME.world.level.rooms[i].h; y++) {
                for(var x = GAME.world.level.rooms[i].x; x < GAME.world.level.rooms[i].x + GAME.world.level.rooms[i].w; x++) {
                    if (GAME.world.level.tiles[y][x].tile_id === 2) { //if this is a wall
                        GAME.world.level.tiles[y][x] = this.generateTile(1);
                        GAME.world.level.nonsolid_tiles.push({'y':y,'x':x});
                    }
                }                
            } 
        }        
    },
    
    generateHallways: function(numRooms) {       
        for (var i = 0; i < numRooms; i++) {
            var roomA = GAME.world.level.rooms[i],
                pointA = {
                    x: Math.floor(Math.random()*roomA.w) + roomA.x,
                    y: Math.floor(Math.random()*roomA.h) + roomA.y
                },
                roomNum = i;

            while(roomNum == i){
                roomNum = Math.floor(Math.random()*GAME.world.level.rooms.length);
            }

            var roomB = GAME.world.level.rooms[roomNum],                
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

                if(pointB.x < GAME.world.width && pointB.y < GAME.world.width){         
                    GAME.world.level.tiles[pointB.y][pointB.x] = this.generateTile(1);
                    GAME.world.level.nonsolid_tiles.push({'y':pointB.y,'x':pointB.x});
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
        var tile = GAME.world.level.nonsolid_tiles.pop();
        GAME.world.level.player = {y: tile.y, x: tile.x};
    },

    spawnEnemies: function() {

    },

    renderWorld: function() {
        GAME.WorldView.renderTiles();
        GAME.WorldView.renderPlayer();
    }

};
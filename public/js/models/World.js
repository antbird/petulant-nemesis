GAME.World = function()
{
    this.height = 32;
    this.width = 32;
    this.roomcount = 12;
    this.maxRoomSize = 6;
    this.minRoomSize = 3;
    this.tile_size = "medium";
    
    this.counters = 
    {
        "level": 0,        
        "tiles": 0,
        "items": 0,        
        "enemies": 0,
        "treasure": 0
    };
    this.level = 
    {
        "player": {y: 0, x: 0},
        "rooms": [],
        "tiles": [],
        "nonsolid_tiles": [],
        "items": [],
        "enemies": [],
        "treasure": []
    };
};
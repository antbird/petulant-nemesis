GAME.World = function()
{
    this.height = 32;
    this.width = 32;
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
        "tiles": [],
        "items": [],
        "enemies": [],
        "treasure": []
    };
};
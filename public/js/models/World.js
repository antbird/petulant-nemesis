GAME.models.World = function()
{
    this.height = 32;
    this.width = 32;
    this.min_room_count = 9;
    this.max_room_count = 12;
    this.min_room_size = 3;
    this.max_room_size = 6;
    this.tile_size = "medium";

    this.rooms = [];
    this.tiles = [];
    this.items = [];
    this.enemies = [];
    this.treasure = [];

    this.counters =
    {
        "level": 0,
        "tiles": 0,
        "items": 0,
        "enemies": 0,
        "treasure": 0
    };
};
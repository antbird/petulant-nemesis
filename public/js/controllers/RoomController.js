GAME.RoomController =
{
    newRoom: function()
    {        
        while(1){
            var x = Math.floor(Math.random() * GAME.world.width) + 1,
                y = Math.floor(Math.random() * GAME.world.height) + 1,
                w = Math.floor(Math.random() * GAME.world.max_room_size) + GAME.world.min_room_size,
                h = Math.floor(Math.random() * GAME.world.max_room_size) + GAME.world.min_room_size,
                center_x = x + (w / 2),
                center_y = y + (h / 2);            
            
            if (x + w >= GAME.world.width || y + h >= GAME.world.height) {
                continue;
            }
            
            return new GAME.Room(x,y,w,h,center_x,center_y);
        }
    }
};
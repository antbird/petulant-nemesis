GAME.MovementController =
{
    move: function(dir,xy_obj) {
        if (dir === 'W' && !this.checkSolid(xy_obj.x-1,xy_obj.y)) {
            --xy_obj.x;
        } else if (dir === 'E' && !this.checkSolid(xy_obj.x+1,xy_obj.y)){
            ++xy_obj.x;
        } else if (dir === 'N' && !this.checkSolid(xy_obj.x,xy_obj.y-1)){
            --xy_obj.y;
        } else if (dir === 'S' && !this.checkSolid(xy_obj.x,xy_obj.y+1)){
            ++xy_obj.y;
        }
    },
    
    checkSolid: function(x,y) {
        return GAME.data.tiles[GAME.world.level.tiles[y][x].tile_id].solid;             
    }
};
GAME.MovementController =
{
    move: function(dir,xy_obj) {
        if (dir === 'W') {
            if (!this.checkSolid(xy_obj.x-1,xy_obj.y))
                --xy_obj.x;
        } else if (dir === 'E') {
            if (!this.checkSolid(xy_obj.x+1,xy_obj.y))
                ++xy_obj.x;
        } else if (dir === 'N') {
            if (!this.checkSolid(xy_obj.x,xy_obj.y-1))
                --xy_obj.y;
        } else if (dir === 'S') {
            if (!this.checkSolid(xy_obj.x,xy_obj.y+1))
                ++xy_obj.y;
        }
    },
    
    checkSolid: function(x,y) {
        return GAME.world.level.tiles[y][x].solid;             
    }
};
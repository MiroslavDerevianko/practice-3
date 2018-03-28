
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
    	const m = [NORTH, WEST, EAST, SOUTH];
        if (!Number.isInteger(x) || !Number.isInteger(y) || (!m.includes(direction))) {
        	throw new TypeError();
        }
        this.x = x;
        this.y = y;
        this.dir = direction;
    }

    left() {
    	switch (this.dir) {
    		case NORTH: {
    			this.dir = WEST;
    			break;
    		}
    		case WEST: {
    			this.dir = SOUTH;
    			break;
    		}
    		case SOUTH: {
    			this.dir = EAST;
    			break;
    		}
    		case EAST: {
    			this.dir = NORTH;
    			break;
    		}
    		default: console.log("Error"); 
    	}
    	return this;
    }

    right() {
    	switch (this.dir) {
    		case NORTH: {
    			this.dir = EAST;
    			break;
    		}
    		case EAST: {
    			this.dir = SOUTH;
    			break;
    		}
    		case SOUTH: {
    			this.dir = WEST;
    			break;
    		}
    		case WEST: {
    			this.dir = NORTH;
    			break;
    		}
    		default: console.log("Error"); 
    	}
    	return this;
    }

    move(n) {
    	if (!Number.isInteger(n)) {
    		throw new TypeError();
    	}
    	switch (this.dir) {
    		case NORTH: {
    			this.y += n;
    			break;
    		}
    		case WEST: {
    			this.x -= n;
    			break;
    		}
    		case SOUTH: {
    			this.y -= n;
    			break;
    		}
    		case EAST: {
    			this.x += n;
    			break;
    		}
    		default: console.log("Error"); 
    	}
    	return this;
    }

    getPosition() {
    	return {x:this.x, y:this.y};
    }

    getDirection() {
    	return this.dir;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };

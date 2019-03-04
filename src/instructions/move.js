import {createRover} from '../rover';
import {NORTH, WEST, SOUTH, EAST} from './constants';

const ensureMovementIsPossible = (rover, plateau) => {
    if (plateau.rovers.find(existingRover => existingRover.x === rover.x && existingRover.y === rover.y)) {
        throw Error('At this position is already another rover');
    }

    if (rover.x > plateau.sizeX || rover.y > plateau.sizeY) {
        throw Error('Reached the end of the plateau, can not move forward');
    }

    return rover;
};

export default (rover, plateau) => {
    switch (rover.orientation) {
        case NORTH:
            return ensureMovementIsPossible(createRover(rover.x, rover.y + 1, rover.orientation), plateau);
        case WEST:
            return ensureMovementIsPossible(createRover(rover.x -1, rover.y, rover.orientation), plateau);
        case SOUTH:
            return ensureMovementIsPossible(createRover(rover.x, rover.y - 1, rover.orientation), plateau);
        case EAST:
            return ensureMovementIsPossible(createRover(rover.x + 1, rover.y, rover.orientation), plateau);
        default:
            throw Error(`Can not move the rover because the orientation "${rover.orientation}" is unknown`);
    }
};

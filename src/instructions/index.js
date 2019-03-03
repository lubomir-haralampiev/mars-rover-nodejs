import {createRover} from '../rover';

const TURN_LEFT = 'L';
const TURN_RIGHT = 'R';
const MOVE = 'M';

const NORTH = 'N';
const SOUTH = 'S';
const WEST = 'W';
const EAST = 'E';

// @TODO - extract in an own module
const transitions = {
    // Another solution(maybe a more elegant one) is to convert the strings to degrees, 
    // calculate the new degrees and convert them back to strings. This way we could support not only 90 degrees.
    // Keepit it simpler for now and define all the transitions as an object.
    [TURN_LEFT]: {
        [NORTH]: WEST,
        [WEST]: SOUTH,
        [SOUTH]: EAST,
        [EAST]: NORTH,
    },
    [TURN_RIGHT]: {
        [NORTH]: EAST,
        [WEST]: NORTH,
        [SOUTH]: WEST,
        [EAST]: SOUTH,
    },
};
const turn = (direction, rover) => {
    const newOrientation = transitions[direction] && transitions[direction][rover.orientation];
    if (!newOrientation) {
        throw Error('Unsupported transition');
    }

    return createRover(rover.x, rover.y, newOrientation);
};

// @TODO - extract in an own module
const ensureMovementIsPosible = (rover, plateau) => rover; // @TODO implement
const move = (rover, plateau) => {
    switch (rover.orientation) {
        case NORTH:
            return ensureMovementIsPosible(createRover(rover.x, rover.y + 1, rover.orientation), plateau);
        case WEST:
            return ensureMovementIsPosible(createRover(rover.x -1, rover.y, rover.orientation), plateau);
        case SOUTH:
            return ensureMovementIsPosible(createRover(rover.x, rover.y - 1, rover.orientation), plateau);
        case EAST:
            return ensureMovementIsPosible(createRover(rover.x + 1, rover.y, rover.orientation), plateau);
        default:
            throw Error(`Can not move the rover because the orientation "${rover.orientation}" is unknown`);
            break;
    };
};

export default (instruction, rover, plateau) => {
    switch (instruction) {
        case TURN_LEFT:
            return turn(TURN_LEFT, rover);
        case TURN_RIGHT:
            return turn(TURN_RIGHT, rover);
        case MOVE:
            return move(rover, plateau);
        default:
            throw Error(`The instruction "${instruction}" is not supported`);
            break;
    }
};

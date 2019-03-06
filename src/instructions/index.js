import {TURN_LEFT, TURN_RIGHT, MOVE} from './constants';
import turn from './turn';
import move from './move';

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
    }
};

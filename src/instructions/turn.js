import {createRover} from '../rover';
import * as constants from './constants';

const transitions = {
    // Another solution(maybe a more elegant one) is to convert the strings to degrees,
    // calculate the new degrees and convert them back to strings. This way we could support not only 90 degrees.
    // Keep it it simpler for now and define all the transitions as an object.
    [constants.TURN_LEFT]: {
        [constants.NORTH]: constants.WEST,
        [constants.WEST]: constants.SOUTH,
        [constants.SOUTH]: constants.EAST,
        [constants.EAST]: constants.NORTH,
    },
    [constants.TURN_RIGHT]: {
        [constants.NORTH]: constants.EAST,
        [constants.WEST]: constants.NORTH,
        [constants.SOUTH]: constants.WEST,
        [constants.EAST]: constants.SOUTH,
    },
};

export default (direction, rover) => {
    const newOrientation = transitions[direction] && transitions[direction][rover.orientation];
    if (!newOrientation) {
        throw Error('Unsupported transition');
    }

    return createRover(rover.x, rover.y, newOrientation);
};

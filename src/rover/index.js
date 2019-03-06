import {ensureIsInteger} from '../validation';

export const createRover = (coordinateX, coordinateY, orientation) => {
    ensureIsInteger(coordinateX, 'coordinateX');
    ensureIsInteger(coordinateY, 'coordinateY');

    return {
        x: coordinateX,
        y: coordinateY,
        orientation,
    };
};

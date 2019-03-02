import {ensureIsArray} from './validation';
import {createPlateau} from './plateau';
import {createRover} from './rover';

export default lines => {
    ensureIsArray(lines);
    const result = [];

    const [sizeX, sizeY] = lines[0].split(' ');
    const plateau = createPlateau(Number.parseInt(sizeX), Number.parseInt(sizeY));

    //console.log(Object.keys(lines));
    const [x, y, orientation] = lines[1].split(' ');
    const rover = createRover(Number.parseInt(x), Number.parseInt(y), orientation);
    // console.log(rover);

    return result;
};

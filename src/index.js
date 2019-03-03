import {ensureIsArray} from './validation';
import {createPlateau} from './plateau';
import {createRover} from './rover';
import processInstruction from './instructions';

const formatOutput = rover => `${rover.x} ${rover.y} ${rover.orientation}`;

export default lines => {
    ensureIsArray(lines);
    const result = [];

    const [sizeX, sizeY] = lines[0].split(' ');
    const plateau = createPlateau(Number.parseInt(sizeX), Number.parseInt(sizeY));

    const [x, y, orientation] = lines[1].split(' ');
    const rover = createRover(Number.parseInt(x), Number.parseInt(y), orientation);
    
    const instructions = [...lines[2]];
    const processedRover = instructions
        .reduce((currentRover, instruction) => processInstruction(instruction, currentRover, plateau), rover);

    result.push(formatOutput(processedRover));

    return result;
};

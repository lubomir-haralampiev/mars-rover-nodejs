import {ensureIsArray, ensureArrayHasOddLength} from './validation';
import {createPlateau} from './plateau';
import {createRover} from './rover';
import processInstruction from './instructions';

const formatOutput = rover => `${rover.x} ${rover.y} ${rover.orientation}`;

export default lines => {
    ensureIsArray(lines);
    // The first line is the plateau and every rover needs two lines, so the array must have odd length.
    ensureArrayHasOddLength(lines);

    const result = [];

    if (!lines[0]) {
        throw Error('Missing data for the plateau');
    }
    const [sizeX, sizeY] = lines[0].split(' ');
    const plateau = createPlateau(Number.parseInt(sizeX), Number.parseInt(sizeY));

    const roverLines = lines.slice(1);
    roverLines.forEach((roverLine, index) => {
        // after creating the plateau the even lines are the rovers and the odd ones the instructions
        // javascript doesn't have tuples out of the box, the only solution I saw, which iterates only once is forEach
        if (index % 2 !== 0) {
            return;
        }

        const [x, y, orientation] = roverLine.split(' ');
        const rover = createRover(Number.parseInt(x), Number.parseInt(y), orientation);

        if (!roverLines[index + 1]) {
            throw Error('No instructions found for the rover');
        }
        const instructions = [...roverLines[index + 1]];
        const processedRover = instructions
            .reduce((currentRover, instruction) => processInstruction(instruction, currentRover, plateau), rover);

        result.push(formatOutput(processedRover));
    });

    return result;
};

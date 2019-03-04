import {ensureIsArray, ensureArrayHasOddLength} from './validation';
import {createPlateau, addToPlateau} from './plateau';
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
    const plateau = createPlateau(Number.parseInt(sizeX, 10), Number.parseInt(sizeY, 10));

    const roverLines = lines.slice(1);
    roverLines.forEach((roverLine, index) => {
        // After creating the plateau the even lines are the rovers and the odd ones the instructions.
        // javascript doesn't have tuples out of the box, the only solution I saw, which iterates only once is forEach
        if (index % 2 !== 0) {
            return;
        }

        const [x, y, orientation] = roverLine.split(' ');
        const rover = createRover(Number.parseInt(x, 10), Number.parseInt(y, 10), orientation);

        if (!roverLines[index + 1]) {
            throw Error('No instructions found for the rover');
        }
        const instructions = [...roverLines[index + 1]];
        const processedRover = instructions
            .reduce((currentRover, instruction) => processInstruction(instruction, currentRover, plateau), rover);
        // As the rovers don't run concurrently it is possible
        // to save the rovers position after processing all the instructions.
        // If the rover should be able to run concurrently,
        // we have to save their position on the plateau after every instruction.
        addToPlateau(processedRover, plateau);

        result.push(formatOutput(processedRover));
    });

    return result;
};

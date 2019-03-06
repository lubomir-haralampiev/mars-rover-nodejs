import processLines from '../../src/index';
import {expect} from '../helpers';

describe('the main function', () => {
    it('should create output as described by the code challenge', () => {
        const lines = [
            '5 5',
            '1 2 N',
            'LMLMLMLMM',
            '3 3 E',
            'MMRMMRMRRM',
        ];

        expect(processLines(lines), 'to exhaustively satisfy', ['1 3 N', '5 1 E']);
    });
});

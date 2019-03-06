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

    it('should throw error on collision', () => {
        const lines = [
            '5 5',
            '1 2 N',
            'LMLMLMLMM',
            '2 3 N',
            'LM',
        ];

        expect(() => processLines(lines), 'to throw error', 'At this position is already another rover');
    });

    it('should throw error when reached the end of the plateau', () => {
        const lines = [
            '5 5',
            '1 2 N',
            'LMLMLMLMM',
            '1 0 N',
            'LLM',
        ];

        expect(() => processLines(lines), 'to throw error', 'Reached the end of the plateau, can not move forward');
    });

    it('should throw error when can not turn due to invalid direction', () => {
        const lines = [
            '5 5',
            '1 2 X', // invalid orientation
            'L',
        ];

        expect(() => processLines(lines), 'to throw error', 'Unsupported transition');
    });

    it('should throw error when can not move due to invalid orientation', () => {
        const lines = [
            '5 5',
            '1 2 X', // invalid orientation
            'M',
        ];

        expect(() => processLines(lines), 'to throw error', 'Can not move the rover because the orientation "X" is unknown');
    });
});

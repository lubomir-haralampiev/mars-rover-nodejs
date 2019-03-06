import {ensureIsInteger, ensureIsArray, ensureArrayHasOddLength} from './index';
import {expect, randomInteger} from '../../test/helpers';

describe('validation', () => {
    describe('ensureIsInteger', () => {
        it('should throw error when not an integer', () => {
            expect(() => ensureIsInteger('dummy-string'), 'to throw error');
        });

        it('should not throw when integer', () => {
            expect(() => ensureIsInteger(randomInteger()), 'not to throw');
        });
    });

    describe('ensureIsArray', () => {
        it('should throw error when not an array', () => {
            expect(() => ensureIsArray('dummy-string'), 'to throw error');
        });

        it('should not throw when integer', () => {
            expect(() => ensureIsArray([]), 'not to throw');
        });
    });

    describe('ensureArrayHasOddLength', () => {
        it('should throw error when not an array', () => {
            expect(() => ensureArrayHasOddLength('dummy-string'), 'to throw error');
        });

        it('should throw when even length', () => {
            expect(() => ensureArrayHasOddLength([randomInteger(), randomInteger()]), 'to throw error');
        });

        it('should not throw when odd length', () => {
            expect(() => ensureArrayHasOddLength([randomInteger()]), 'not to throw');
        });
    });
});

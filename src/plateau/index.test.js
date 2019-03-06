import sinon from 'sinon';
import {createPlateau, addToPlateau, __RewireAPI__ as CreatePlateauRewireAPI} from './index';
import {expect} from '../../test/helpers';

const ensureIsIntegerStub = sinon.stub();

describe('plateau', () => {
    beforeEach(() => {
        CreatePlateauRewireAPI.__Rewire__('ensureIsInteger', ensureIsIntegerStub);
    });

    afterEach(() => {
        CreatePlateauRewireAPI.__ResetDependency__('ensureIsInteger');
        sinon.reset();
    });

    describe('createPlateau', () => {
        const sizeX = 'a-dummy-X';
        const sizeY = 'a-dummy-Y';

        describe('should fail', () => {
            it('when x is not an integer', () => {
                const integerError = Error('Error from ensureIsInteger');
                ensureIsIntegerStub
                    .onFirstCall().throws(integerError);


                expect(() => createPlateau(sizeX, sizeY), 'to throw', integerError);
                expect(ensureIsIntegerStub, 'was called once');
                expect(ensureIsIntegerStub, 'to have a call satisfying', [sizeX, 'sizeX']);
            });

            it('when y is not an integer', () => {
                const integerError = Error('Error from ensureIsInteger');
                ensureIsIntegerStub
                    .onFirstCall().returns()
                    .onSecondCall().throws(integerError);

                expect(() => createPlateau(sizeX, sizeY), 'to throw', integerError);
                expect(ensureIsIntegerStub, 'was called twice');
                expect(ensureIsIntegerStub, 'to have a call satisfying', [sizeX, 'sizeX']);
                expect(ensureIsIntegerStub, 'to have a call satisfying', [sizeY, 'sizeY']);
            });
        });

        describe('should succeed', () => {
            it('and return a plateau', () => {
                ensureIsIntegerStub.returns();

                const plateau = createPlateau(sizeX, sizeY);

                expect(plateau, 'to exhaustively satisfy', {
                    sizeX,
                    sizeY,
                    rovers: [],
                });
                expect(ensureIsIntegerStub, 'to have a call satisfying', [sizeX, 'sizeX']);
                expect(ensureIsIntegerStub, 'to have a call satisfying', [sizeY, 'sizeY']);
            });
        });
    });

    describe('addToPlateau', () => {
        it('should add a rover to the plateau', () => {
            const plateau = {sizeX: 5, sizeY: 5, rovers: []};
            const rover = {x: 1, y: 2, orientation: 'N'};

            addToPlateau(rover, plateau);
            expect(plateau, 'to exhaustively satisfy', {
                sizeX: 5,
                sizeY: 5,
                rovers: [rover],
            });
        });
    });
});

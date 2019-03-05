import sinonChai from 'sinon-chai';
import chai from 'chai';
import sinon from 'sinon';

import {createPlateau, __RewireAPI__ as CreatePlateauRewireAPI} from './index';

chai.use(sinonChai);
const {expect} = chai;

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
        describe('should fail', () => {
            it('when x is not an integer', () => {
                ensureIsIntegerStub
                    .onFirstCall().throws(Error('Error from ensureIsInteger'));

                const sizeX = 'a-dummy-X';
                const sizeY = 'a-dummy-Y';
                expect(() => createPlateau(sizeX, sizeY)).to.throw('Error from ensureIsInteger');
                expect(ensureIsIntegerStub).to.have.callCount(1);
                expect(ensureIsIntegerStub).to.have.been.calledWith(sizeX);
            });
        });
    });
});

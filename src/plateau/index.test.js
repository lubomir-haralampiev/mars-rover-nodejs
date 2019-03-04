import {createPlateau, __RewireAPI__ as CreatePlateauRewireAPI} from './index';

describe('plateau', () => {
    it.skip('should be implemented', () => {
        CreatePlateauRewireAPI.__Rewire__('ensureIsInteger', () => {
            throw Error('Error from ensureIsInteger');
        });

        createPlateau();

        CreatePlateauRewireAPI.__ResetDependency__('ensureIsInteger');
    });
});

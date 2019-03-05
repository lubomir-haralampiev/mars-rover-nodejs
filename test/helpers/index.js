import {clone as createExpect} from 'unexpected';
import unexpectedSinon from 'unexpected-sinon';

export const expect = createExpect(); // eslint-disable-line import/prefer-default-export
expect.use(unexpectedSinon);

import {clone as createExpect} from 'unexpected';
import unexpectedSinon from 'unexpected-sinon';

export const expect = createExpect();
expect.use(unexpectedSinon);

export const randomInteger = () => Math.round(Math.random() * 100);

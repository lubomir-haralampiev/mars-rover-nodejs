export const ensureIsInteger = (value, variableName) => {
    if (!Number.isInteger(value)) {
        throw Error(`The provided value for "${variableName}" must be an integer.`);
    }
};

export const ensureIsArray = value => {
    if (!Array.isArray(value)) {
        throw Error('The value must be an array');
    }
};

export const ensureArrayHasOddLength = array => {
    if (!Array.isArray(array) || array.length % 2 === 0) {
        throw Error('The length of the array has to be an odd number');
    }
};

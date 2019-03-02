export const ensureIsInteger = (value, variableName) => {
    if (!Number.isInteger(value)) {
        throw Error(`The provided value for "${variableName}" must be an integer.`);
    }

    return;
};

export const ensureIsArray = value => {
    if (!Array.isArray(value)) {
        throw Error('The value must be an array');
    }

    return;
};

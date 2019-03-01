export const createPlateau = (sizeX, sizeY) => ({
    // Intentionally not modeling the plateau as array of arrays with fixed sized, filled with undefined.
    // Because the only purpose is holding the rovers and check for collisions.
    // If visualisation is needed, then a real grid can still be done on the GUI side.
    sizeX,
    sizeY,
    rovers: [],
});

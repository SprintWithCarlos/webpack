/* eslint-disable no-restricted-globals */
const inputsAreValid = (...input) => input.every(num => typeof num === 'number' && !isNaN(num));

export default inputsAreValid;

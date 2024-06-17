const pi = 3.14278;

function doublepi() {
  return 2 * pi;
}

function triplepi() {
  return 3 * pi;
}

export default pi; // name can be changed while importing in index.js
export { doublepi, triplepi }; //names need to be specific and same as of in export

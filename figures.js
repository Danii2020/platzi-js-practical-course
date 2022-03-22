// square code
console.group("Square");
const squareSide = 5;
console.log(`Sides of the square are ${squareSide}.`);

const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;
console.groupEnd();
// triangle code
console.group("Triangle");
const triangleSides = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
console.log(`Sides of the triangle are ${triangleSides} and the base is ${triangleBase}.`)

const trianglePerimeter = (triangleSides * 2) + triangleBase;
const triangleArea = (triangleBase * triangleHeight)/2;
console.log(`The perimeter of the triangle is ${trianglePerimeter} cm.`);
console.log(`The area of the triangle is ${triangleArea} cm^2.`)

console.groupEnd();

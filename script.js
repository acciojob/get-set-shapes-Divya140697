//complete this code

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of the parent class (Rectangle) with the same side for width and height
    super(side, side);
  }

  // Method to calculate and return the perimeter of the square
  getPerimeter() {
    return 4 * this._width;
  }
}

// Example usage:
const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.width); // Output: 5
console.log(rectangle1.height); // Output: 10
console.log(rectangle1.getArea()); // Output: 50

const square1 = new Square(4);
console.log(square1.width); // Output: 4
console.log(square1.height); // Output: 4
console.log(square1.getArea()); // Output: 16
console.log(square1.getPerimeter()); // Output: 16 (4 + 4 + 4 + 4)


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

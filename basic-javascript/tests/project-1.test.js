const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num = 10 * 10 should equal 100', () => {
      const multiplyByTen = funcs.multiplyByTen(10);
      expect(multiplyByTen).to.equal(100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num = 10 * 10 should equal 100', () => {
      const subtractFive = funcs.subtractFive(10);
      expect(subtractFive).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('str should be a String', () => {
      const str1 = 'string';
      const str2 = 'string';
      assert.isString(str1, 'expected str to be a String');
      assert.isString(str2, 'expected str to be a String');
    });
    it("str's must be same length", () => {
      const areSameLength = funcs.areSameLength('length', 'widths');
      assert.isNotFalse(areSameLength);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('nums must be equal', () => {
      const areEqual = funcs.areEqual(5, 5);
      assert.isNotFalse(areEqual);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety(89);
      assert.isTrue(lessThanNinety);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty(51);
      assert.isTrue(greaterThanFifty);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('num should be a Number', () => {
      const x = 2;
      const y = 4;
      assert.isNumber(x, 'expected x to be a Number');
      assert.isNumber(y, 'expected y to be a Number');
    });
    it('expected to return 6', () => {
      const add = funcs.add(2, 4);
      assert.equal(add, 6);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('num should be a Number', () => {
      const x = 4;
      const y = 2;
      assert.isNumber(x, 'expected x to be a Number');
      assert.isNumber(y, 'expected y to be a Number');
    });
    it('expected to return 2', () => {
      const subtract = funcs.subtract(4, 2);
      assert.equal(subtract, 2);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('num should be a Number', () => {
      const x = 2;
      const y = 4;
      assert.isNumber(x, 'expected x to be a Number');
      assert.isNumber(y, 'expected y to be a Number');
    });
    it('expected to return 0.5', () => {
      const divide = funcs.divide(2, 4);
      assert.equal(divide, 0.5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('num should be a Number', () => {
      const x = 2;
      const y = 4;
      assert.isNumber(x, 'expected x to be a Number');
      assert.isNumber(y, 'expected y to be a Number');
    });
    it('expected to return 0.5', () => {
      const multiply = funcs.multiply(2, 4);
      assert.equal(multiply, 8);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});

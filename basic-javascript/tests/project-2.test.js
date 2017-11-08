const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;

describe('Project-1 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('num should be a Number', () => {
      const x = 2;
      const y = 4;
      assert.isNumber(x, 'expected x to be a Number');
      assert.isNumber(y, 'expected y to be a Number');
    });
    it('expected to return 4', () => {
      const getBiggest = funcs.getBiggest(4, 4);
      assert.equal(getBiggest, 4);
    });
    it('expected to return 6', () => {
      const getBiggest = funcs.getBiggest(6, 5);
      expect(getBiggest).to.equal(6);
    });
    it('expected to return 6', () => {
      const getBiggest = funcs.getBiggest(5, 6);
      expect(getBiggest).to.equal(6);
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });

    it('language should be a String', () => {
      const language = 'string';
      assert.isString(language, 'expected str to be a String');
    });
    it('German should return "Guten Tag!"', () => {
      const greeting = funcs.greeting('German');
      expect(greeting).to.equal('Guten Tag!');
    });
    it('Spanish should return "Hola!"', () => {
      const greeting = funcs.greeting('Spanish');
      expect(greeting).to.equal('Hola!');
    });
    it('Any other entry should return "Hello!"', () => {
      const greeting = funcs.greeting('Any');
      expect(greeting).to.equal('Hello!');
    });
  });
  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be equal to 5', () => {
      const isTenOrFive = funcs.isTenOrFive(5);
      assert.isTrue(isTenOrFive);
    });
    it('num must be equal to 10', () => {
      const isTenOrFive = funcs.isTenOrFive(10);
      assert.isTrue(isTenOrFive);
    });
  });
  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be less than fifty', () => {
      const isInRange = funcs.isInRange(49);
      assert.isTrue(isInRange);
    });
    it('num must be greater than twenty', () => {
      const isInRange = funcs.isInRange(21);
      assert.isTrue(isInRange);
    });
  });
  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be an integer', () => {
      const isInteger = funcs.isInteger(1);
      assert.isTrue(isInteger);
    });
  });
  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must divisible by 5 and 3', () => {
      const fizzBuzz = funcs.fizzBuzz(15);
      assert.equal(fizzBuzz, 'fizzbuzz');
    });
    it('num must divisible by 5', () => {
      const fizzBuzz = funcs.fizzBuzz(10);
      assert.equal(fizzBuzz, 'buzz');
    });
    it('num must divisible by 3', () => {
      const fizzBuzz = funcs.fizzBuzz(6);
      assert.equal(fizzBuzz, 'fizz');
    });
    it('num not divisible by 3 or 5', () => {
      const fizzBuzz = funcs.fizzBuzz(4);
      assert.equal(fizzBuzz, 4);
    });
  });
  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('num should be a Number', () => {
      const num = 2;
      assert.isNumber(num, 'expected num to be a Number');
    });
    it('num must be greater than zero', () => {
      const isPrime = funcs.isPrime(-1);
      assert.isFalse(isPrime);
    });
    it('must be a prime', () => {
      const isPrime = funcs.isPrime(89);
      assert.isTrue(isPrime);
    });
  });
  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should be an array', () => {
      const arr = [0, 2];
      assert.typeOf(arr, 'array');
    });
    it('must be first item in array', () => {
      const returnFirst = funcs.returnFirst([0, 2]);
      expect(returnFirst).to.equal(0);
    });
  });
  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should be an array', () => {
      const arr = [0, 2];
      assert.typeOf(arr, 'array');
    });
    it('all indices should be incremented by 1', () => {
      const arr = [-2, 1, 2];
      const arr1 = [-1, 2, 3];
      const incrementByOne = funcs.incrementByOne(arr);
      expect(arr).to.deep.equal(arr1);
    });
  });
  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should be an array', () => {
      const arr = [0, 2];
      assert.typeOf(arr, 'array');
    });
    it('item should be at the end of array', () => {
      const arr = [-2, 1, 2];
      const item = 3;
      const addItemToArray = funcs.addItemToArray(arr, item);
      expect(addItemToArray).to.deep.equal([-2, 1, 2, 3]);
    });
  });
  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should be an array', () => {
      const arr = [0, 2];
      assert.typeOf(arr, 'array');
    });
    it('item should be at the beginning of array', () => {
      const arr = [-2, 1, 2];
      const item = 3;
      const addItemToFront = funcs.addItemToFront(arr, item);
      expect(addItemToFront).to.deep.equal([3, -2, 1, 2]);
    });
  });
  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should be an array', () => {
      const arr = ['lol', 'cool'];
      assert.typeOf(arr, 'array');
    });
    it('string of words should not start with a space', () => {
      const arr = ['lol', 'cool'];
      const wordsToSentence = funcs.wordsToSentence(arr);
      expect(wordsToSentence).to.deep.equal('lol cool');
    });
  });
  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should be an array', () => {
      const arr = ['lol', 'cool'];
      assert.typeOf(arr, 'array');
    });
    it('if found returns true', () => {
      const arr = ['lol', 'cool'];
      const contains = funcs.contains(arr, 'lol');
      assert.isTrue(contains);
    });
  });
  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should be an array', () => {
      const arr = [2, 3];
      assert.typeOf(arr, 'array');
    });
    it('expected to return 6', () => {
      const addNumbers = funcs.addNumbers([2, 4]);
      assert.equal(addNumbers, 6);
    });
  });
  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should be an array', () => {
      const arr = [20, 30, 40];
      assert.typeOf(arr, 'array');
    });
    it('expected to return 6', () => {
      const averageTestScore = funcs.averageTestScore([20, 30, 40]);
      assert.equal(averageTestScore, 30);
    });
  });
  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should be an array', () => {
      const arr = [20, 30, 40];
      assert.typeOf(arr, 'array');
    });
    it('expected to return 6', () => {
      const largestNumber = funcs.largestNumber([20, 30, 40]);
      assert.equal(largestNumber, 40);
    });
  });
});

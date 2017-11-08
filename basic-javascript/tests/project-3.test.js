const assert = require('chai').assert;
const funcs = require('../src/project-3');
const expect = require('chai').expect;

describe('Project-2 Functions', () => {
  describe('`makeCat`', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('num should be a Number', () => {
      const age = 2;
      assert.isNumber(age, 'expected age to be a Number');
    });
    it('num should be a String', () => {
      const name = 'string';
      assert.isString(name, 'expected str to be a String');
    });
    it('num = 10 * 10 should equal 100', () => {
      const makeCat = funcs.makeCat(10);
      expect(makeCat)..should.have.deep.property("otherObj", match.otherObj)
    });
  });
});

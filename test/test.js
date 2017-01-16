var assert = require("assert"); // core module
var C = require('../cash.js');  // our module
totalPayable = 210         // £2.10
cashPaid     = 300         // £3.00
dfference    =  90         // 90p
change       = [50,20,20]  // 50p, 20p, 20p
describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
	it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})
  })
});
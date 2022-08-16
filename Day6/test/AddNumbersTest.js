const assert =  require("chai").assert;
const Addition = require("../AddNumbers").addNumbers
const Subtract = require("../AddNumbers").subtarctNumbers
describe("Test suite for testing AddNumbers code" , ()=>
{
  before(function() {    
    console.log("Before ")   
  }); 

  after(function() {    
    // runs before all tests in this block    
    console.log("After")
  }); 

  beforeEach(function() {    
    // runs before each test in this block    
  });    
  afterEach(function() {    
    // runs after each test in this block    
  });
  // Test Cases
  it('Add 2 and 3', ()=>
  {

    var actual = Addition(2,3)
    assert.equal(actual,5)

  })

  it('Add 2 and 10', ()=>
  {

    var actual = Addition(2,10)
    assert.equal(actual,12)

  })

  it('Output should be more than 10', ()=>
  {

    var actual = Addition(12,10)
    assert.isAbove(actual,10)


  })

  it('Testing Subtract Method with 12 and 10', ()=>
  {

    var actual = Subtract(12,10)
    assert.equal(actual,2)


  })



})
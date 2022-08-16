const assert = require("chai").assert;
const App = require("../hello");


// Test Suite > Test suite is a collection of test cases
describe("This is a test suite", ()=>
{
  // Test case , which actuallu has code for testing the actual code
  it('testing hello function' ,()=>
  {
     // AAA 
     // A > Arrange  
     // A > Act
     // A > Assert
      
     // Arrange , set up env
     // Act > Calling function
     var msg = App();
       // Assert
     assert.equal(msg, " hello")


  })

  it('Type should be string', ()=>
  {
     var actual = App();
     assert.typeOf(actual, 'string')
  })

})

describe('mocha testing with chai assert ', function() {    
  it('test case for foo', function() {    
      var foo = 2;    
      assert.typeOf(foo, 'string'); // without optional message    
      assert.typeOf(foo, 'string', 'foo is a string'); // with optional message    
      // assert.equal(foo, 'bar', 'foo equal `bar`');    
      // assert.lengthOf(foo, 3, 'foo`s value has a length of 3');    
  });    
  it('check beverages has 3 types of tea', function() {    
      var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };    
      assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');    
  });    
});


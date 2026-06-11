/* 
  The principal difference is that when assert triggers an error, 
  the it block immediately terminates. So, in the first variant if the first assert fails, 
  then we’ll never see the result of the second assert.

  Making tests separate is useful to get more information about what’s going on, 
  so the second variant is better. 
**/

describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
    // assert.equal(pow(3, 4), 81);
  });

  it("raises to n-th power", function () {
    assert.equal(pow(3, 4), 81);
  });

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

describe("pow", function () {
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 10; x++) {
      makeTest(x);
    }
  });

  // ... more tests to follow here, both describe and it can be added
});

describe("test", function () {
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it("test 1", () => alert(1));
  it("test 2", () => alert(2));
});

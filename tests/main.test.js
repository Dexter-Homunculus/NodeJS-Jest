const main = require('../src/main.js');

describe('Scenario 1: First Scenario', () => {
  test('Test 1.1: First Test Case', () => {
    //this test case consists of the following assertions
    expect(main.testfunction1(11)).toBe(11);
    expect(main.testfunction1(12)).toBe(12);
    expect(main.testfunction1(13)).toBe(13);
    expect(main.testfunction1(13)).not.toBe(14);
  });

  test('Test 1.2: Second Test Case', () => {
    //this test case consists of the following assertions
    expect(main.testfunction2(11)).toBe(11);
    expect(main.testfunction2(12)).toBe(12);
    expect(main.testfunction2(13)).toBe(13);
    expect(main.testfunction2(13)).not.toBe(14);
  });
  
});


describe('Scenario 2: Second Scenario', () => {
  test('Test 2.1: First Test Case', () => {
    //this test case consists of the following assertions
    expect(main.testfunction1(11)).toBe(11);
    expect(main.testfunction1(12)).toBe(12);
    expect(main.testfunction1(13)).toBe(13);
    expect(main.testfunction1(13)).not.toBe(14);
  });

  test('Test 2.2: Second Test Case', () => {
    //this test case consists of the following assertions
    expect(main.testfunction2(11)).toBe(11);
    expect(main.testfunction2(12)).toBe(12);
    expect(main.testfunction2(13)).toBe(13);
    expect(main.testfunction2(13)).not.toBe(14);
  });
  
});
# Testing Framework

Specifications:
- Pass/Fail
- Label/identifier for test
- Equal matcher

---

Usage?

User(programmer)

1)
Input:
describe('toEqual', function() {
  it('2 + 2 is equal to 4', function(){
    expect(2+2).toEqual(4)
  })
});

Output:
//- toEqual -
Test: 2 + 2 is equal to 4
Pass


2)
Input:
describe('toEqual', function() {
  it('2 + 3 is equal to 4', function(){
    expect(2+3).toEqual(4)
  })
});

Output:
//- toEqual -
Test: 2 + 3 is equal to 4
Fail

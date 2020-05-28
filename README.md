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
it('2 + 2 is equal to 4', function(){
  expect(2+2).toEqual(4)
})

Output:
Test: 2 + 2 is equal to 4
Pass


2)
Input:
it('2 + 2 is equal to 5', function(){
  expect(2+2).toEqual(5)
})

Output:
Test: 2 + 2 is equal to 5
Fail

"use strict";

function expect(){
  
}

function it(label, callback){
  console.log(`Test: ${label}`)
  callback()
}



/////
it('2 + 2 is equal to 4', function(){ expect(2+2).toEqual(4) })

it('2 + 3 is equal to 4', function(){ expect(2+3).toEqual(4) })

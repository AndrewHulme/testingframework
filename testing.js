"use strict";

function expect(actual){

  return {
    toEqual: function(expected){

      if(actual === expected){
        console.log("Pass")
      } else {
        console.log("Fail")
      }

    },

    toBeAnArray: function(){

      if(actual.constructor.name === "Array"){
        console.log("Pass")
      } else {
        console.log("Fail")
      }

    }
  }
}

function it(label, callback){
  console.log(`Test: ${label}`)
  callback()
}



/////
it('2 + 2 is equal to 4', function(){ expect(2+2).toEqual(4) })

it('2 + 3 is equal to 4', function(){ expect(2+3).toEqual(4) })

it('[] to be an array', function(){ expect([]).toBeAnArray() })

it('"Andrew" to not be an array', function(){ expect("Andrew").toBeAnArray() })

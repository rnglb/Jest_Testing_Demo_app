const functions= require("./functions");

test("test 1",()=>{
    expect(functions.add(2,3)).toBe(5);
});
test("test 2",()=>{
    expect(functions.isNull()).not.toBe(6);
    });
test("test 3",()=>{
    expect(functions.isNull()).toBeNull();
    });
test("test 4",()=>{
    expect(functions.checkValue(null)).toBeFalsy();
    });
test("test 5",()=>{
     expect(functions.checkValue(undefiend)).toBeFalsy();
     });
test("test 6",()=>{
    expect(functions.checkValue(0)).toBeFalsy();
    });
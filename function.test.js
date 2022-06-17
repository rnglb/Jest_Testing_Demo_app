const functions= require("./functions");

test("test first",()=>{
    expect(functions.add(2,3)).toBe(5);
});
test("test second",()=>{
    expect(functions.isNull()).not.toBe(6);
    });
test("test third",()=>{
    expect(functions.isNull()).toBeNull();
    });
test("test fourth",()=>{
    //expect(functions.checkValue(null/undefiend/0)).toBeFalsy();
    expect(functions.checkValue(null)).toBeFalsy();
    });

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("one dollar should be 130.156 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(1)
    const expected = 1 * 130.156;
    expect(fromDollarToYen(1)).toBe(130.156);
}) 
test("one yen should be 0.0071300 pound", function(){
    const { fromYenToPound } = require('./app.js')
    const pound =  fromYenToPound(1)
    const expected = 1 * 163.67;
    expect(fromYenToPound(1)).tobe(163.67)

})
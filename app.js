// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar }

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 130.156;
    return valueInYen;
}
module.exports = { fromDollarToYen }

const fromYenToPound = function(valueInYen){
    let valueInYen = valueInPound * 0.0071300
    return valueInYen
}
module.exports = { fromYenToPound }
var input = 'turpentine and turtles';

var whaleVowelArrays = ["a","e","i","o","u"]

var resultArray = []


for (let i = 0; i < input.length; i++) {
  const checkInput = input[i];
  // console.log(`character position: ${i},${checkInput}`)
  if (checkInput === "e") {
    resultArray.push(input[i])}

     if (checkInput === "u") {
      resultArray.push(input[i])
  }



  for (let j = 0; j < whaleVowelArrays.length; j++) {
    const checkWhales = whaleVowelArrays[j];
    // console.log(`character position: ${j},${checkWhales}`)
    if (checkWhales === checkInput) {
      resultArray.push(checkWhales)
      
    }

  }
}
console.log(resultArray);

var resultString = resultArray.join("")

console.log(resultString.toUpperCase())

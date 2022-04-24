const sum = require("./sum")

test('adds 1+2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
test("capitalize first letter", () => {
    expect(capitalize("caca")).toBe("Caca")
})

function reverseString(string){
    return string.split("").reverse().join("")
}
test("reverse string", () => {
    expect(reverseString("caca")).toBe("acac")
})

class calculator{
    add(a,b){
        return a + b
    }
    substract(a,b){
        return a - b
    }
    divide(a,b){
        return a / b
    } 
    multiply(a,b){
        return a * b
    }
}

const calcu = new calculator()

test("calculator functions", () => {
    expect(calcu.add(4,3)).toBe(7)
    expect(calcu.substract(4,3)).toBe(1)
    expect(calcu.divide(4,3)).toBeCloseTo(1.33)
    expect(calcu.multiply(4,3)).toBe(12)
})

function caesarCipher(str, shift){
	let string = ""
	for(let i = 0; i < str.length; i++){
  	let letter = str.charAt(i)
    let letterASCII = letter.charCodeAt(0)
    let newLetter = letter;
    if(letterASCII >= 97 && letterASCII <= 122){
    	let newASCII
    	if(shift + letterASCII > 122){
      	newASCII = (shift + letterASCII - 122) + 96
      } else {
       	newASCII = shift + letterASCII
      }
      newLetter = String.fromCodePoint(newASCII)
    } else if (letterASCII >= 65 && letterASCII <= 90){
    	let newASCII
    	if(shift + letterASCII > 90){
      	newASCII = (shift + letterASCII - 90) + 64
      } else {
       	newASCII = shift + letterASCII
      }
      newLetter = String.fromCodePoint(newASCII)
    }
    string += newLetter
  }
  return string
}


test("cipher functions", () => {
    expect(caesarCipher("ABC abc XYZ xyz caca aAzZ",2)).toBe("CDE cde ZAB zab ecec cCbB")
})

function analyzeFunction(numbers){
    let average = 0
    let min, max
    let length = 0
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        if(min === undefined){
            min = numbers[i]
        } else if (numbers[i] < min){
            min = numbers[i]
        }
        if(max === undefined){
            max = numbers[i]
        } else if(numbers[i] > max){
            max = numbers[i]
        }  
        length += 1
        total += numbers[i] 
    }
    average = total / length
		console.log(total)
    var obj = {
        average: average,
        min: min,
        max: max,
        length: length,
        total: total
    }

    return obj
}

test("number analyzer", () => {
    expect(analyzeFunction([2,4,8,6])).toStrictEqual({average: 5, min: 2, max: 8, length: 4, total: 20})
})
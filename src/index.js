module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let output = '';
    let numString = number.toString();

    if (number === 0) {
        return 'zero' 
     }

     
    if (number < 20) {
        output = ones[number];
        return output;
    }

    
    

    if (numString.length === 2) {
        if (numString[1] === "0") {
            return tens[parseInt(numString[0])];
        } else {
            output = `${tens[parseInt(numString[0])]} ${ones[parseInt(numString[1])]}`;
            return output;
        }

    }
    if (numString.length == 3) {
            if (numString[1] === "0" && numString[2] === "0") {
                output = `${ones[parseInt(numString[0])]} ${hundred}`;
                return output;
        }  else {
            output = `${ones[parseInt(numString[0])]} ${hundred} ` + toReadable(Number(numString[1] + numString[2]));
            return output;
            }
           
    }

    
    


   }

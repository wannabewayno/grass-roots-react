/**
 * @param  {String} - A CSS colorString //? Example rgba(112,76,132,1);
 * @return {Colour} - a new Colour instance 
 */
function destructureColour(colourString) {

    //gaurd clause for empty strings
    if(colourString === ''){
        return
    }

    let type;
    let channels;

    if(colourString.indexOf('#') !== -1){
        type = 'rgb'
        const regex = (colourString.length - 1) === 6 ? /\w\w/g : /\w/g
        channels = (colourString.match(regex)).map(hex => parseInt(hex,16))
    } else {

        //use regex to get the digits into an array [ch1,ch2,ch3,alpha]
        channels = (colourString.match(/\d+(\.?\d+)?/g)).map(channel => Number(channel));

        //use regex to get the letters, get rid of the 'a' for alpha, we'll always set this as default 1
        type = (colourString.match(/[b-z]+|[B-Z]+/g))[0].toLowerCase();

        //return an object with channels and description
    }
    
    return {type,channels};
}

const lol = destructureColour('rgb(112,134,96)');
console.log(lol);
const testHex = destructureColour('#cdf783')
console.log(testHex);
const Colour = require('./Colour.test');

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
        type = 'hex'
        switch(colourString.length - 1){
            case 3: channels = (colourString.match(/\w/g)||[]).map(hex => hex + hex);
                break;
            case 6: channels = colourString.match(/\w\w/g)||[]
                break;
            default: throw new Error('Not a valid Hex colour')
        }
    } else {

        //use regex to get the digits into an array [ch1,ch2,ch3,alpha]
        channels = (colourString.match(/\d+(\.?\d+)?/g)).map(channel => Number(channel));

        //use regex to get the letters, get rid of the 'a' for alpha, we'll always set this as default 1
        type = (colourString.match(/[b-z]+|[B-Z]+/g))[0].toLowerCase();

        //return an object with channels and description
    }
    
    return new Colour(type,channels);
}

const colour1 = destructureColour('rgb(255,125,125)');
const colour2 = destructureColour('hsl(255,80%,90%)');
const colour3 = destructureColour('#FFF');
const colour4 = destructureColour('#F1F0FF');

console.log(colour1);
console.log(colour2);
console.log(colour3);
console.log(colour4);

console.log('BEFORE DARKEN:',colour2)
colour2.darken(20);
console.log('AFTER DARKEN:',colour2)

console.log('BEFORE desaturate:',colour2)
colour2.desaturate(20);
console.log('AFTER desaturate:',colour2)



module.exports = destructureColour
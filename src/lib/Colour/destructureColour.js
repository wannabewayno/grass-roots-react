import Colour from './Colour.js'

/**
 * @param  {String} - A CSS colorString //? Example rgba(112,76,132,1);
 * @return {Colour} - a new Colour instance 
 */
export default function destructureColour(colourString) {

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
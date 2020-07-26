const HSL2RGB = require('./HSL2RGB.test');
const RGB2HSL = require('./RGB2HSL.test');
const RGB2HEX = require('./RGB2HEX.test');
const HEX2RGB = require('./HEX2RGB.test');

module.exports = class Colour {
    constructor(type, channels){
        this.type = type;
        this.channels = channels;
        this.alpha = channels[3]? channels[3]:1
    }
// ==============================================================================
    //only get, can't set without converting
    getType() { return this.type };
    setType() { console.log("can't set type here, use convert() to change the type")}
// ==============================================================================
    getChannels() { return this.channels };

    /**
     * Set Channels by passing key:value pairs of channels to change
     * @param {Object} channels - named channels with values to set
     */
    setChannels(channels) {
        switch(this.type){
            case'rgb':
                const { r,R, g,G, b,B } = channels;
                if(R!==undefined|r!==undefined) this.channels[0] = R!==undefined?R:r;
                if(G!==undefined|g!==undefined) this.channels[1] = G!==undefined?G:g;
                if(B!==undefined|b!==undefined) this.channels[2] = B!==undefined?B:b;
                break;
            case'hsl':
                const { h,H, s,S, l,L } = channels;
                if(H!==undefined|h!==undefined) this.channels[0] = H!==undefined?H:h;
                if(S!==undefined|s!==undefined) this.channels[1] = S!==undefined?S:s;
                if(L!==undefined|l!==undefined) this.channels[2] = L!==undefined?L:l;
                break;
            default: 
                console.error("Can't set Colour channels, type is undefined")
        }
    };
// ==============================================================================
    getOpacity() { return this.alpha * 100 };

    /**
     * Set the opacity from transparent (0) to opaque (100);
     * @param {Number} opacity - a number from 0 - 100 
     */
    setOpacity(opacity) { this.alpha = opacity/100 }

// ==========================================================================
    darken(percentage){
        const initialColour = this.type;
        if(this.type !== 'hsl') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        L -= percentage;
        if(L < 0 ) L = 0;
        this.setChannels({ L });
        this.convert(initialColour);
    }

    lighten(percentage){
        const initialColour = this.type;
        if(this.type !== 'hsl') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        L += percentage;
        if(L > 100) L = 100;
        this.setChannels({ L });
        this.convert(initialColour);
    }
// ==========================================================================
    saturate(percentage){
        const initialColour = this.type;
        if(this.type !== 'hsl') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        S += percentage;
        if(S > 100 ) S = 100;
        this.setChannels({ S });
        this.convert(initialColour);
    }

    desaturate(percentage){
        const initialColour = this.type;
        if(this.type !== 'hsl') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        S -= percentage;
        if(S < 0) S = 0;
        this.setChannels({ S });
        this.convert(initialColour);
    }
// ==============================================================================
    getContrast(){
        const initialColour = this.type;
        this.convert('rgb');

        const [ R , G , B ] = this.channels;
        
        // Get YIQ ratio
        const yiq = ((R * 299) + (G * 587) + (B * 114)) / 1000;

        //convert back to initialColour
        this.convert(initialColour);

        // Check contrast
        let black;
        let white;
        if(this.type === 'rgb') black = 'rgba(0,0,0,1)';   white ='rgba(255,255,255,1)';
        if(this.type === 'hsl') black = 'hsla(0,0%,0%,1)'; white ='hsla(0,0%,100%,1)';
        if(this.type === 'hex') black = '#000000';         white ='#FFFFFF';

        return (yiq >= 128) ? black : white;

    };
// ==============================================================================
    /**
     * Turns a colour object into a CSSStyle string;
     * @return {String} - css colour string //? rgba(255,40,113,1)
     */
    CSS() {
        switch(this.type){
            case'rgb':
                const [R,G,B] = this.channels;
                return `rgba(${R},${G},${B},${this.alpha})`
            case'hsl':
                const [H,S,L] = this.channels;
                return `hsla(${H},${S}%,${L}%,${this.alpha})`
            case'hex':
                return `#${this.channels.join('')}`;
            default: 
                return console.warn('Error: unpassable colour type');
        }
    }

    /**
     * Converts a colour from one format to another
     * @param  {String} convertTo - convert to format? //? rgb|hsl|hex
     *
     */
    convert(convertTo){

        // if same colour type, do nothing 🤷
        if(this.type === convertTo){
            return 
        }

        switch(convertTo){
            case'rgb':
                if(this.type === 'hex') this.channels = HEX2RGB(...this.channels);
                if(this.type === 'hsl') this.channels = HSL2RGB(...this.channels);
                this.type = 'rgb'
                break;
            case'hsl':
                if(this.type === 'hex') this.convert('rgb');
                this.channels = RGB2HSL(...this.channels);
                this.type = 'hsl'
                break;
            case'hex':
                if(this.type === 'hsl') this.convert('rgb');
                this.channels = RGB2HEX(...this.channels)
                this.type = 'hex'
                break;
            default:
                console.warn("convert doesn't recognise this as a colour to convert to")
        }
    }

    clone(){
        return new Colour(this.type,this.channels);
    }
}
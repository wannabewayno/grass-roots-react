import HSL2RGB from './HSL2RGB.js';
import RGB2HSL from './RGB2HSL.js';


export default class Colour {
    constructor(type, channels){
        this.type = type;
        this.channels = channels;
        this.alpha = channels[3]? channels[3]:1
    }
    //only get, can't set without converting
    getType() { return this.type };
    setType() { console.log("can't set type here, use convert() to change the type")}

    getChannels() { return this.channels };

    /**
     * Set Channels by passing key:value pairs of channels to change
     * @param {Object} channels - named channels with values to set
     */
    setChannels(channels) {
        switch(this.type){
            case'rgb':
                const { r,R, g,G, b,B } = channels;
                if(R|r) this.channels[0] = R?R:r;
                if(G|g) this.channels[1] = G?G:g;
                if(B|b) this.channels[2] = B?B:b;
                break;
            case'hsl':
                const { h,H, s,S, l,L } = channels;
                if(H|h) this.channels[0] = H?H:h;
                if(S|s) this.channels[1] = S?S:s;
                if(L|l) this.channels[2] = L?L:l;
                break;
            default: 
                console.error("Can't set Colour channels, type is undefined")
        }
    };

    getOpacity() { return this.alpha * 100 };

    /**
     * Set the opacity from transparent (0) to opaque (100);
     * @param {Number} opacity - a number from 0 - 100 
     */
    setOpacity(opacity) { this.alpha = opacity/100 }

    darken(percentage){
        if(this.type === 'rgb') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        L -= percentage;
        if(L < 0 ) L = 0;
        this.setChannels({ L });
    }

    lighten(percentage){
        if(this.type === 'rgb') this.convert('hsl');
        let [H,S,L] = this.getChannels();
        L += percentage;
        if(L > 1) L = 1;
        this.setChannels({ L });
    }

    /**
     * Turns a colour object into a CSSStyle string;
     * @return {String} - css colour string //? rgba(255,40,113,1)
     */
    toString() {
        switch(this.type){
            case'rgb':
                const [R,G,B] = this.channels;
                return `rgba(${R},${G},${B},${this.alpha})`
            case'hsl':
                const [H,S,L] = this.channels;
                return `hsla(${H},${S}%,${L}%,${this.alpha})`
            default: 
                return console.warn('Error: unpassable colour type');
        }

    }

    /**
     * Converts a colour from one format to another
     * @param  {String} convertTo - convert to format? //? rgb|hsl
     */
    convert(convertTo){

        // if same colour type, do nothing 🤷
        if(this.type === convertTo){
            return 
        }

        switch(convertTo){
            case'rgb':
                this.channels = HSL2RGB(...this.channels);
                this.type = 'rgb'
                break;
            case'hsl':
                this.channels = RGB2HSL(...this.channels);
                this.type = 'hsl'
                break;
            default:
                console.warn("convert doesn't recognise this as a colour to convert to")
        }
    }

    clone(){
        return new Colour(this.type,this.channels);
    }
}
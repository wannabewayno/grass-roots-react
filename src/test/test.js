const siPrefixes =
 [
    {
        name:'yotta',
        symbol:'Y',
        value:1_000_000_000_000_000_000_000_000,
    },
    {
        name:'zetta',
        symbol:'Z',
        value:1_000_000_000_000_000_000_000,
    },
    {
        name:'exa',
        symbol:'E',
        value:1_000_000_000_000_000_000,
    },
    {
        name:'peta',
        symbol:'P',
        value:1_000_000_000_000_000,
    },
    {
        name:'tera',
        symbol:'T',
        value:1_000_000_000_000,
    },
    {
        name:'giga',
        symbol:'G',
        value:1_000_000_000,
    },
    {
        name:'mega',
        symbol:'M',
        value:1_000_000,
    },
    {
        name:'kilo',
        symbol:'k',
        value:1_000,
    },
    {
        name:'hecto',
        symbol:'h',
        value:100,
    },
    {
        name:'deka',
        symbol:'da',
        value:10,
    },
    {
        name:'base unit',
        symbol:'',
        value:1,
    },
    {
        name:'deci',
        symbol:'d',
        value:0.1,
    },
    {
        name:'centi',
        symbol:'c',
        value:0.01
    },
    {
        name:'milli',
        symbol:'m',
        value:0.001
    },
    {
        name:'micro',
        symbol:'u',
        value:0.000_001
    },
    {
        name:'nano',
        symbol:'n',
        value:0.000_000_001
    },
    {
        name:'angstrom',
        symbol:'A',
        value:0.000_000_000_1
    },
    {
        name:'pico',
        symbol:'p',
        value:0.000_000_000_001
    },
    {
        name:'femto',
        symbol:'f',
        value:0.000_000_000_000_001
    },
    {
        name:'atto',
        symbol:'a',
        value:0.000_000_000_000_000_001
    },
    {
        name:'zepto',
        symbol:'z',
        value:0.000_000_000_000_000_000_001
    },
    {
        name:'yocto',
        symbol:'y',
        value:0.000_000_000_000_000_000_000_001
    },
]

const siUnits = [
    {
        name:'meter',
        symbol:'m'
    },
    {
        name:'second',
        symbol:'s'
    },
    {
        name:'mole',
        symbol:'mole'
    },
    {
        name:'ampere',
        symbol:'A'
    },
    {
        name:'kelvin',
        symbol:'K'
    },
    {
        name:'candela',
        symbol:'cd'
    },
    {
        name:'kilogram',
        symbol:'kg'
    }
]

const cssUnits = [
    {
        name:'pixels',
        symbol:'px'
    },
    {
        name:'points',
        symbol:'pt'
    },
    {
        name:'picas',
        symbol:'pc'
    },
    {
        name:'relative element',
        symbol:'em'
    },
    {
        name:'relative root element',
        symbol:'rem'
    },
    {
        name:"relative width of the '0'",
        symbol:'ch'
    },
    {
        name:"relative height of the 'x'",
        symbol:'ex'
    },
    {
        name:'viewport height percentage',
        symbol:'vh'
    },
    {
        name:'viewport width percentage',
        symbol:'vw'
    },
    {
        name:'relative to parent element',
        symbol:'%'
    },
    {
        name:'viewports max percentage',
        symbol:'vmax'
    },
    {
        name:'viewports min percentage',
        symbol:'vmin'
    },
]

//TODO (but why?)
const imperialUnitsUS = []
const imperialUnitsBR = []

const allUnits = [...siUnits,...cssUnits, ...imperialUnitsUS, imperialUnitsBR]

class Unit {
    constructor(value, unit){
        this.Value = value; //Number
        this.Unit = unit; //String
    }

    css(){
        return this.Value + this.Unit
    }

    // is a getter and setter in one
    value(newValue){

        if(newValue){
            this.Value = newValue;
        } else {
            return this.Value;
        }
    }

    //Only returns the unit, you can't set it
    unit(){
        return this.Unit;
    }

    /**
     * returns unit prefix
     */
    prefix(){
        //TODO construct big regex that searchs for known units.
        //use it to replace the unit with a '', if the length is '1' then we found a prefix
        // otherwise assume base unit and return 'base unit'
    }

    unitMatcher(){
        const allSymbols = allUnits.map(unit => unit.symbol)
        return new RegExp(allSymbols.join('|'));
    }

    toString(type){
        switch(type){
            case'css':
                return
            case'long':
                return
            case'short':
                return
            case'text':
                return
            default: console.log('type not recognised please enter one of css|short|long|text');
        }
    }

    //TODO: convert units to other units
    //This is how you change unit type.
    convert(convertTo){
        console.log(convertTo);
        console.log(this.Unit);
        const unitMatcher = this.unitMatcher();
        const currentPrefix = this.Unit.match(unitMatcher);
        const futurePrefix = convertTo.match(unitMatcher);
        console.log(currentPrefix);
        console.log(futurePrefix);

        const currentPrefixValue = (allUnits.find(prefix => prefix.symbol === currentPrefix)).value;
        const futurePrefixValue = (allUnits.find(prefix => prefix.symbol === futurePrefix)).value;
        console.log(currentPrefixValue);
        console.log(futurePrefixValue);
        
    }
}

const seconds = new Unit(1,'s');
console.log(seconds.css());

seconds.convert('ms');

module.exports = Unit;
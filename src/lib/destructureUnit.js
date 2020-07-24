import Unit from './Unit';

/**
 * Takes in a css unit string and returns a new Instance of Unit
 * @param  {String} unitString - a css unti string //? example '150px'|'2rem'|'1fr'|'1000ms'
 * @return {Unit} - A new Unit
 */
export default function destructureUnit(unitString){
    const value = Number(unitString.match(/^[-]?\d+/g));
    const unit  = (unitString.match(/[a-z]+/g)||[])[0];
    return new Unit(value,unit);
}
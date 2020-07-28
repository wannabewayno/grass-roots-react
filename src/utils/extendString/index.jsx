import capitalization from './Capitalization/capitalization.js';

export default  () => {
    return String.prototype.capitalization = capitalization;
}
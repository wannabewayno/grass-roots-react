export default () => {
    Array.prototype.separate = function(callBack){
        const pass = this.filter((value,index,array) => callBack(value,index,array));
        const fail = this.filter((value,index,array) => !callBack(value,index,array));
    return { pass, fail }
    }
}
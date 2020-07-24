// this file reads everything in components and builds up the index.js file 
const fs = require('fs');

function isComponent(path){
    const isDirectory = fs.lstatSync(path).isDirectory();
    const childPaths = fs.readdirSync(path);
    const containsIndex = childPaths.some(childPath => childPath==='index.jsx'); 
    return isDirectory && containsIndex
}

function classifyPaths(paths){
    const directories = paths.filter(path => !isComponent(path))||[];
    const components = paths.filter(path => isComponent(path))||[];
    return { components, directories }
};

module.exports = function findComponentPaths(path){
    const AllComponentPaths = [];
    childPaths = fs.readdirSync(path);
    const paths = childPaths.map(childPath => path + '/' + childPath )
    const { components, directories } = classifyPaths(paths);
    if (components.length > 0) AllComponentPaths.push(...components);
    if (directories.length > 0) {
        AllComponentPaths.push(
            ...directories.map(directory => findComponentPaths(directory)).flat()
        )
    };
    return AllComponentPaths
}

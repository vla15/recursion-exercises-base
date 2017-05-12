const _ = require('underscore'); // the real one! :)


const stringify = function(obj) {
  let value = ''
  if (typeof obj === 'string') {
    value +=  '\"' +  obj + '\"';
  } else if (typeof obj === 'boolean' || obj === null || typeof obj === 'number' ) {
    value += '' + obj;
  }

  if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      value += '\[\]'
    } else {
      for (let index = 0; index < obj.length; index++) {
        if(index === obj.length - 1) {
          value += stringify(obj[index]);
        } else {
          value += stringify(obj[index]) + ',';
        }
      }
      value = '\[' + value + '\]';
    }
  } else if (obj instanceof Object) {
    if (Object.keys(obj).length === 0) {
      value += '\{\}';
    } else {
      for (let key in obj) {
        value += "\{" + stringify(key) + ':' + stringify(obj[key]) + "\}";
      }
    }
  }
  return value;
};

module.exports = {
  stringify: stringify
};
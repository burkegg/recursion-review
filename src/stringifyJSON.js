// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    //console.log('returning 1 ', obj);
    return 'null';
  }
  if (typeof obj === 'string') {
    //console.log('returning 2 ', obj);
    return '"' + obj + '"';
  } 
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    //console.log('returning 3 ', obj);
    return obj.toString();
  }
  if (obj === undefined) {
    //console.log('returning 4 ', obj);
    return '';
  }

  if (typeof obj === 'function') {
    //console.log('returning 5 ', obj);
    return '';
  }
  
  if (Array.isArray(obj)) {
    return '[' + obj.map(el => stringifyJSON(el)) + ']';
  }

  if ((typeof obj === 'object') && (obj !== null) && (!Array.isArray(obj))) {
    var tempString = [];
    
    if ((typeof obj !== "function") && (obj !== undefined)) {
      for (let key in obj) {
        if ((typeof obj[key] !== 'function') && (obj[key] !== undefined)) {
          tempString.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));     
        }
      }
    }
    return '{' + tempString + '}';
  } 
};


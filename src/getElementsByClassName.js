// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var storage = [];
  
  // recursive helper func that checks if el includes className
  var helper = function(element) {
    // check if element is not undefined
    if (element.classList) {
      if (element.classList.contains(className)) {
        // console.log(element);
        storage.push(element); 
      }
      // console.log('storage: ',  storage);
      // call helper on childNodes of elements
      if (element.hasChildNodes()) {
        var children = element.childNodes; 

        for (var i = 0; i < children.length; i++) {
          helper(children[i]);
        }
      } 
    }     
  };
  
  helper(document.body);
  // console.log('final storage: ', storage);
  return storage;  
}; 


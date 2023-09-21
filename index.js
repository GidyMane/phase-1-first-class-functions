function receivesAFunction(callback) {
    // Check if the callback is indeed a function before calling it
    if (typeof callback === 'function') {
      callback();
    } else {
      console.error('The argument is not a function.');
    }
  }
  
  // Example usage:
  function myCallback() {
    console.log('Callback function called!');
  }
  
  receivesAFunction(myCallback);

  function returnsANamedFunction() {
    // Define a named function inside the scope of this function
    function namedFunction() {
      console.log('This is a named function.');
    }
  
    // Return the named function
    return namedFunction;
  }
  
  // Example usage:
  const myFunction = returnsANamedFunction();
  myFunction(); // This will call the named function and log the message
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log('This is an anonymous function.');
    };
  }
  
  // Example usage:
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction(); // This will call the anonymous function and log the message
  
  
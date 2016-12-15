Promise.resolve("foo")
  // 1. Receive "foo" concatinate "bar" to it and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 3000);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 3000)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asyncronous code in the
  // prior then block.
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asyncronously with a setTimeout function
    console.log(string);
});

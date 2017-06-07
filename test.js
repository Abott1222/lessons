'use strict';

const hello = function() {
  // this === window or global (non strict)
  // this === undefined (strict)
  // this === something
  console.log(global.name);
}

global.name = 'paul';

hello();

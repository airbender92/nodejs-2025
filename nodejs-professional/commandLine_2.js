#!/usr/bin/env node

'use strict';

/**
 * the command line arguments are stored in the `process.argv` array.
 * which has the following structure:
 * [0] the path of the executable that started the node.js process
 * [1] the path to the application
 * [2-n] the command line arguments
 * 
 * Example: ['/bin/node', '/path/to yourscript', 'arg1', 'arg2', ...]
 */

// Store the first argument as username
var username = process.argv[2];

console.log('path.sep', require('path').sep); // path.sep \

/**
 *  process.argv [
  'C:\\nvm4w\\nodejs\\node.exe',
  'D:\\wybD\\Codes\\nodejs-2025\\nodejs-professional\\commandLine_2.js'
]
 */
console.log('process.argv', process.argv);

// check if the username hasn't been provided
if(!username) {
    // extract the filename
    var appName = process.argv[1].split(require('path').sep).pop();

    // give the user an example on how to use the app.
    console.error('Missing argument! Example : %s Your_name', appName);

    // Exit the app (success: 0, error: 1).
    // An error will stop the execution chain. For example:
    // ./app.js && 1s     -> won't execute 1s
    // ./app.js David && 1s  -> will execute 1s
    process.exit(1);
}

// Print the message to the console.
console.log('Hello %s!', username);

// 1. run: node commandLine_2.js David
// 2. run: node commandLine_2.js
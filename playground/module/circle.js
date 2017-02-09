const PI = Math.PI;
exports.area = (r) => PI * r * r;

exports.circumferece = (r) => 2 * PI;


//Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:
// (function (exports, require, module, __filename, __dirname) {
// // Your module code actually lives in here
// });



// const EventEmitter = require("node:events");
// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on("a", ({f, d}) => {
//     console.log(`"Helloooo! this is cb first listener",${f},${d}`);
// });
// setTimeout(() => {
//     myEmitter.emit("a", {
//         f: "akter",
//         d: "hossain",
//     });
// }, 100);

// Second listener
// myEmitter.on("event", function secondListener(arg1, arg2) {
//     console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// Third listener
// myEmitter.on("event", function thirdListener(...args) {
//     const parameters = args.join(", ");
//     console.log(`event with parameters ${parameters} in third listener`);
// });

// console.log(myEmitter.listeners("event"));

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
//   const line=input.split(" ")
//     const originalprize=parseInt(line[0])
//     const discountprize=parseInt(line[1])
//     const discountamount=originalprize*discountprize/100
//     const totalprize=originalprize-discountamount
//     console.log(`Price: ${totalprize.toFixed(2)}`)
//10000000000//
    // const revers=input.split("").reverse().join("")
    // console.log(revers)
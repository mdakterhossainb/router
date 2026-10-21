EventEmitter হলো Node.js-এর একটি অত্যন্ত গুরুত্বপূর্ণ ক্লাস (Class), যা মূলত বিভিন্ন 'ইভেন্ট' (Event) তৈরি, হ্যান্ডেল এবং পরিচালনা করতে ব্যবহৃত হয়। সহজ কথায়, এটি অ্যাপ্লিকেশনের এক অংশ থেকে অন্য অংশে সংকেত (Signal) পাঠানোর একটি মাধ্যম।
এর সহজ অর্থ এবং কাজের পদ্ধতি নিচে আলোচনা করা হলো:

১. EventEmitter কীভাবে কাজ করে? (সহজ উদাহরণ)

ধরে নিন, আপনি একটি বেল বাজালেন এবং বেল বাজার সাথে সাথে ঘরের দরজা খুলে গেল।
• এখানে বেল বাজানো হলো একটি ইভেন্ট (Event)।
• আর দরজা খুলে যাওয়া হলো ওই ইভেন্টের প্রতিক্রিয়া বা লিসেনার (Listener)।
EventEmitter ঠিক এই কাজটিই কোডের মাধ্যমে করে। এটি একটি নির্দিষ্ট ঘটনা ঘটলে (Emit হলে) তার বিপরীতে কোন ফাংশনটি রান করবে, তা নির্ধারণ করে দেয়।

২. প্রধান দুটি মেথড (Methods)

EventEmitter মূলত দুটি প্রধান ফাংশন বা মেথড নিয়ে কাজ করে:
• .on(eventName, listener): এটি কোনো নির্দিষ্ট ইভেন্ট শোনার জন্য (Listen করার জন্য) তৈরি করা হয়। অর্থাৎ, ইভেন্টটি ঘটলে কী কাজ হবে, তা এখানে লিখে রাখা হয়।
• .emit(eventName): এটি দিয়ে ইভেন্টটিকে ঘটানো বা ট্রিগার (Trigger) করা হয়। অর্থাৎ, সংকেত পাঠানো হয় যে "এই ঘটনাটি এখন ঘটেছে"।

৩. কোডের মাধ্যমে একটি ছোট উদাহরণ:


const EventEmitter = require("events"); // Node.js এর built-in মডিউল
const myEmitter = new EventEmitter();

// ১. প্রথমে ইভেন্টটি শুনুন (Listen) এবং কী করতে হবে তা বলুন
myEmitter.on("bellRing", () => {
  console.log("open the door");
});

// ২. এবার ইভেন্টটি ঘটান (Emit)
myEmitter.emit("bellRing");
// আউটপুট আসবে: দরজাটি খুলে দিন!
const eventEmitter = require("events");
const myemitter = new eventEmitter();

myemitter.on("bellring", () => {
  console.log("open the door");
});

setTimeout(() => {
  myemitter.emit("bellring");
}, 1000);



const eventEmitter = require("events");
const myEmitter = new eventEmitter();

myEmitter.on("bellring", ({ period, text }) => {
  console.log(`we need to run because ${period} ${text}`);
});
setTimeout(() => {
  myEmitter.emit("bellring", {
    period: "first",
    text: "period ended",
  });
}, 100);

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

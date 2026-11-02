console.log("This is the starting point of my code");

process.nextTick(() => {
    console.log("This is process.nextTick code");
});

setTimeout(() => {
    console.log("This is first timeout function");
}, 2000);

setImmediate(() => {
    console.log("This is setImmediate code");
});

console.log("This is the end point of my code");

setTimeout(() => {
    console.log("This statement will run after 0 delay");
}, 0);

process.nextTick(() => {
    console.log("This is second process.nextTick code");
});

Promise.resolve().then(() => {
    console.log("This is Promise code");
});
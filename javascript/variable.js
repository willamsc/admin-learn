const MY_OBJECT = { key: "值" };
MY_OBJECT.key = "其他值";
console.log(MY_OBJECT);


//数组也不受保护
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

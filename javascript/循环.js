for (let i = 1; i <= 5; i++) {
  console.log(i); // 输出: 1 2 3 4 5
}

//for...of 循环用于遍历数组、字符串等可迭代对象，直接返回每个元素的值。
let numbers = [1, 2, 3, 4, 5];
for(let i of numbers){
  console.log(i);
}

let str = "Hello";
for (let char of str) {
    console.log(char); // 输出: H e l l o
}


//for...in 循环用于遍历对象的键（属性名）或数组的索引。它一般不用于遍历数组的元素值
let person = { name: "Alice", age: 25, city: "Beijing" };
for(let key in person){
  console.log(key,person[key]);
}

let arr = ["a", "b", "c"];
for (let index in arr) {
    console.log(index, arr[index]); // 输出: 0 a 1 b 2 c
}



//while 循环
let i = 1;
while (i <= 5) {
    console.log(i); // 输出: 1 2 3 4 5
    i++; // 步进
}

//do...while 循环
let a = 1;
do {
    console.log(i); // 输出: 1 2 3 4 5
    i++;
} while (i <= 5);


//break
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // 当 i 等于 6 时，跳出循环
    }
    console.log(i); // 输出: 1 2 3 4 5
}

//continue
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue; // 当 i 等于 6 时，跳过本次循环
    }
    console.log(i); // 输出: 1 2 3 4 5 7 8 9 10
}


//forEach 是数组的一个方法，用来对数组的每个元素执行回调函数。它不支持提前跳出循环（没有 break 和 continue）。
let nums = [1,2,3,4,5];
nums.forEach(function(num,index){
  console.log(num,index);
})
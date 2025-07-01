// 直接创建
let arr = [1, 2, 3, 4, 5];

// 使用 Array 构造函数
let arr2 = new Array(5);  // 创建一个长度为 5 的空数组
let arr3 = new Array(1, 2, 3); // 创建并初始化数组


// 访问数组元素
console.log(arr[0]); // 输出: 1
console.log(arr[2]); // 输出: 3



//添加数组元素
arr.push(6); // 在数组末尾添加元素
arr.unshift(0); // 在数组开头添加元素


//删除数组元素
arr.pop(); // 删除数组末尾的元素
arr.shift(); // 删除数组开头的元素
//以上两种方法都会返回被删除的元素



//遍历数组
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}


arr.forEach((value, index) => {
    console.log(`索引: ${index}, 值: ${value}`);
});
// 输出:
// 索引: 0, 值: 10
// 索引: 1, 值: 20
// 索引: 2, 值: 30

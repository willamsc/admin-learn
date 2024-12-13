let age = 20;
let category = age >= 18 ? "成人" : "未成年";
console.log(category); // 输出: 成人
//如果条件成立输出"成人"，否则输出"未成年"。


let user = null;
let defaultName = "匿名";
let name = user || defaultName; // 如果user为null，返回defaultName
console.log(name); // 输出: 匿名



let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combined = [...arr1, ...arr2];
console.log(combined); // 输出: [1, 2, 3, 4, 5]



let obj1 = { name: "Alice" };
let obj2 = { age: 25 };
let person = { ...obj1, ...obj2 };
console.log(person); // 输出: { name: "Alice", age: 25 }


let cart = [
  { name: "手机", price: 2000, quantity: 1 },
  { name: "耳机", price: 500, quantity: 2 },
  { name: "充电器", price: 100, quantity: 3 }
];

// 使用reduce计算总价
let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// 判断是否享受折扣
let finalPrice = totalPrice >= 3000 ? totalPrice * 0.9 : totalPrice;

console.log(`购物车总价: ${totalPrice} 元`);
console.log(`最终支付: ${finalPrice.toFixed(2)} 元`);

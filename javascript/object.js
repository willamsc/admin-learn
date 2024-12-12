// 使用对象字面量创建对象
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// 使用 Object 构造函数创建对象
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;



console.log(person.name); // 输出: "Alice"
console.log(car['model']); // 输出: "Camry"


person.age = 31;
car.year = 2021;


//通过赋值添加新属性
person.job = "Engineer";
car.color = "Blue";


// 删除对象属性
delete person.age;
delete car.color;


//利用in和hasOwnProperty方法判断对象是否包含某个属性

console.log('name' in person); // 输出: true
console.log(car.hasOwnProperty('model')); // 输出: true
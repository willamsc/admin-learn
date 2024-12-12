//javascript的输出有几种方式
console.log("hello world");
//输出变量
let  a = 1;
console.log(a);
//2、输出在HTML中，document.write() 会覆盖页面的内容。
document.write("hello world");

//3、输出在HTML中，innerHTML 会覆盖页面的内容。
document.getElementById("demo").innerHTML = "hello world";
//4、alert 会弹出一个警告框。
alert("hello world");

//5、confirm 会弹出一个确认框。
confirm("hello world");

//6、prompt 会弹出一个输入框。获得的数据可以通过变量保存
let b = prompt("hello world");
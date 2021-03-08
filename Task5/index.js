function someFunc(arg) {
  console.log(arg.foo);
  console.log(arg.bar);
}

someFunc({ foo: "This", bar: "works!" });
var someObject = {
  foo: "This",
  bar: "works!",
};

someFunc(someObject);

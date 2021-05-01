var test = "hello";
const {a, b, ...rest} = {a: 1, b: 2, c:3};

var foo = function() {
    console.log("start");
    glb = "global";
};

var bar = function() {
    console.log(glb);
    console.log(test);
    console.log(a);
    console.log(b);
    console.log(rest);
};

//foo();
bar();
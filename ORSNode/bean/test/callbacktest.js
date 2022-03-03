



function grick(callback) {
    var a = 8;
    callback(a);
    console.log("i am grick " + a);
}

grick((a) => {
    console.log("i am call back function " + a);

});
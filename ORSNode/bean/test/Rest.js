/*
const sum = (...input) => {
    console.log(...input);
    console.log(input);
console.log(`${a}`)    
    let total = 0;
    for (let i of input) {
        total += i;
    }
    console.log(total);
    return total;
}

let res = sum(1, 8, 6, 5, 0, 45);
console.log(res);
*/

const fun = (a, b, ...d) => {
    console.log(`${a} <*******> ${b}`);

    console.log(d);

    console.log(`array lengts ${d.length}` );

    console.log(`index of d at zezo ${d[0]}`)
    console.log(b );

    console.log(b.length);

//console.log(c.in)


}


fun('Ronaldo', 'Neymar', 'pele', 'messi', 'Edan');
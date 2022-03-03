
const sum = (a, b, c) => {

    console.log(c);
    //    console.log(c[0])
    console.log(`${c}`);

    console.log(`sum of a :: ${a},b ::${b},c:::  ${c} is: ${a + b + c} `);
}
//sum(45, 58, 97,58 ,74,65,25,75);


let arraya = [45, 58, 58];

//sum.apply(null, arraya);


console.log(`value of array is ::: ${arraya}`);
sum(...arraya);


/*



let arr = [1, 2, 3]

let arr1 = [4, 5, 6]



arr1 = arr1.concat(arr);

console.log(arr1);
arr1 = [...arr, ...arr1]

console.log(arr1);
*/
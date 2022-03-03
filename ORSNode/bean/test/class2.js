const class1 = require("./class1");

class class2 extends class1 {


    constructor() {
        super();

        //        this.number_3 = 30;

        //      this.number_4 = 40;

    }

    number_3 = 30;

    number_4 = 40;


    add(number_1, number_2, number_3, number_4) {

        //    add(number_1, number_2) {

        console.log("i am coming from add mathod" + this.number_1);
        console.log("i am coming from add mathod" + this.number_2);
        console.log("i am coming from add mathod" + this.number_3);
        console.log("i am coming from add mathod" + this.number_4);

        //        return number_1 + number_2;
        return this.number_1 + this.number_2 + this.number_3 + this.number_4;
    }




}

var sample = new class2().add();

//var sample_1 = sample.add();



console.log('Ans is ::' + sample);
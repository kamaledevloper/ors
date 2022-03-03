let youbube1 = {


    name: " thapatrchnical",

    containt: "programing",

    feature: function (reating, support) {


        console.log(`hi ${this.name} is grt youtube channel and its containet is ${this.containt} please rate ${reating} star and subbport its afferts to ${support}`)
    }
}


youbube1.feature(5, 'subscribe');


let youbube2 = {

    name: "life easy",

    containt: "vlogs"
}


youbube1.feature.call(youbube2, 5, "sub");


youbube1.feature.apply(youbube2, [5, 'sub']);

const youtuber1 = {
    name: "LIfe Easy",
    containt: "progrming ",
    feature: function (reating, support) {
        console.log(`very friendly way of teaching. ${this.name} containt is grt ${this.containt} and i would like to give rating ${reating} please support to ${support}`);

    }
}

//youtuber1.feature(8, 'sub');



const youtuber2 = {
    name: "Kuch Bhi ",

    containt: "programing & v Log "
}

youtuber1.feature.call(youtuber2, 5, "sub");



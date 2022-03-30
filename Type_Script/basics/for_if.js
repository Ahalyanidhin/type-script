var q = "hai";
var w = "hello";
var colr = ["blue", "green", "yellow", "orange", "red", "white"];
console.log("ninu" + " " + q + "\t" + w);
console.log("".concat(q, " ").concat(w));
for (var _i = 0, colr_1 = colr; _i < colr_1.length; _i++) {
    var temp = colr_1[_i];
    if (temp == "white") {
        console.log(temp + "--->Favourite");
    }
    else {
        console.log(temp);
    }
}

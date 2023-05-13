var randomNummer1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNummer1 + ".png"

var imageSource = "../img/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);


var randomNummer2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNummer2 + ".png";

var imageSource2 = "../img/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);


if ( randomNummer1 > randomNummer2) {
    document.querySelector("h1").innerHTML = "★ Spiller 1 Vant!";
}
else if ( randomNummer2 > randomNummer1) {
    document.querySelector("h1").innerHTML = "★ Spiller 2 Vant!"
}
else {
    document.querySelector("h1").innerHTML = "Uavgjort!"
}

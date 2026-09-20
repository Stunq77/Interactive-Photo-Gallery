function upDate(previewPic) {

    console.log("upDate function triggered");

    console.log("Alt:", previewPic.alt);

    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function undo() {

    console.log("undo function triggered");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
function MakeSlideShowNew(params) {

    var picObjList = params.objectArray;
    console.log("objectArray");
    // get reference to the DOM object inside which the SlideShow image 
    // and buttons will be created.
    var slideShow = document.createElement("div");
    slideShow.classList.add("slideShow");

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    // add a caption into the image div
    var myCaption = document.createElement("p");
    div.append(myCaption);

    //optional property
    var textAlignment = params.textAlignment || "center";
    myCaption.style.textAlign = textAlignment;

    //optional property # 2
    var textColor = params.textColor || "pink";
    myCaption.style.color = textColor;

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picObjList[picNum].image;
        myCaption.innerHTML = picObjList[picNum].caption;
    }
    //define count
    var count = 0;
    //create prop button
    var propButton = document.createElement("button");
    propButton.innerHTML = "Change Border";
    propButton.style.width = "70px";
    propButton.style.display = "block";
    propButton.style.position = "inherit";
    propButton.style.top = "1ex";
    propButton.style.left = "50px";
    slideShow.appendChild(propButton);

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picObjList.length - 1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    function changeBorder() {
        if (count === 0) {
            myImage.style.border = "3px inset black";
            myImage.style.borderRadius = "50%";
            count++;
        } else {
            myImage.style.border = "8px inset gold";
            myImage.style.borderRadius = "100px";
            count = 0;
        }
    }
    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;
    propButton.onclick = changeBorder;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < picObjList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };
    return slideShow;
}
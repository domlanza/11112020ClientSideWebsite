function MakeSliderFW(list)
{
   
    var slider = document.createElement("div");

    for (var i = 0; i < list.length; i++) {
        var sliderElement = document.createElement("div");
        slider.appendChild(sliderElement);

        var container = document.createElement("div");
        container.classList.add("container");
        sliderElement.appendChild(container);
        
        var image = document.createElement("img");
        image.classList.add("resize");
        image.classList.add("image");
        image.src = list[i].image;
        container.appendChild(image);
        
        
        var overlay = document.createElement("div");
        var text = document.createElement("div");
        container.appendChild(overlay);

        var slidecontainer = document.createElement("div");
        slidecontainer.classList.add("slidecontainer");
        sliderElement.appendChild(slidecontainer);
        
        
        var captione = document.createElement("h3");
        captione.innerHTML = list[i].caption;
        container.appendChild(captione);
        
        
        
        var input = document.createElement("input");
        var range;
        var rangee;
        input.type = "range";
        input.min = "1";
        input.max = "100";
        input.value = "50";
        input.classList.add("slider");
        
          input.oninput = function () {
           console.log("range = " + input.value);
           rangee = input.value;
        };

        input.onchange = function () {
           range = this.value;
           console.log("onchange =" + range);
        };
        
        slidecontainer.appendChild(input);

        
        var button = document.createElement("button");
        button.innerHTML = "Value";
        sliderElement.appendChild(button);
        
        var buttonOut = document.createElement("p");
        sliderElement.appendChild(buttonOut);

        button.onclick = function (input, buttonOut) {
                    return function() {
                        buttonOut.innerHTML = input.value;
                    }
                 }(input, buttonOut);
                 
        sliderElement.appendChild(buttonOut);
    }
    return slider;

}



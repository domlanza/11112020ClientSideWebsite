function MakeSliderFW()
{
    var mag = {};

    mag.makeSlider = function (range, myRange, demo) {

        var slider, output;
        slider = document.getElementById(myRange);
        output = document.getElementById(demo);

        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = slider.value;
        };

        slider.onchange = function () {
            range = this.value;
        };
        
        function myFunction(){
            document.getElementById("demo").innerHTML = slider.value;
            
        };
       
        
        
    };
    
   

    return mag;
    
}

      

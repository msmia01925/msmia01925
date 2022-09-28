

var c1 = document.getElementById("car1");
var c2 = document.getElementById("car2");
var c3 = document.getElementById("car3");
var c4 = document.getElementById("car4");



var info1 = document.getElementById("info1");
var info1a = document.getElementById("info1a");
var info2 = document.getElementById("info2");
var info2a = document.getElementById("info2a");
var info3 = document.getElementById("info3");
var info3a = document.getElementById("info3a");

var model = document.getElementById("model")
var home = document.getElementById("home")

home.addEventListener("click",function(){
    

    main.style.backgroundImage ="url(img/mainimg.jpg)"
    info1.innerHTML = "";
    info1a.innerHTML = "1.6 s"
    info2.innerHTML ="";
    info3.innerHTML =""
    model.innerHTML = ""
})


var main = document.getElementById("header");
c1.addEventListener("click",function(){
    

    main.style.backgroundImage ="url(img/car1.jpg)"
    info1.innerHTML = "1.6 s";
    info1a.innerHTML = "60mph"
    info2.innerHTML ="180mph";
    info3.innerHTML ="420"
    model.innerHTML = "Model-XY"
})


c2.addEventListener("click",function(){
   

    main.style.backgroundImage ="url(img/car2.jpg)"
  
    info1.innerHTML = "1.6 s";
    info1a.innerHTML = "70mph"
    info2.innerHTML ="200mph";
    info3.innerHTML ="390"
    model.innerHTML = "Model-XC"
    
})


c3.addEventListener("click",function(){
    

    main.style.backgroundImage ="url(img/car3.jpg)"
    info1.innerHTML = "1.6 s";
    info1a.innerHTML = "80mph";
    info2.innerHTML ="230mph";
    info3.innerHTML ="450";
    model.innerHTML = "Model-XA"
})


c4.addEventListener("click",function(){
   

    main.style.backgroundImage ="url(img/car4.jpg)"
    info1.innerHTML = "1.6 s";
    info1a.innerHTML = "50mph";
    info2.innerHTML ="160mph";
    info3.innerHTML ="300";
    model.innerHTML = "Model-XB";
})


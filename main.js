function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function bigImg(x) {
  x.style.height = "560px";
  x.style.width = "410px";
}

function normalImg(x) {
  x.style.height = "550px";
  x.style.width = "400px";
}
function bigImg1(x) {
  x.style.height = "560px";
  x.style.width = "410px";
}

function normalImg1(x) {
  x.style.height = "550px";
  x.style.width = "400px";
}
function bigImg2(x) {
  x.style.height = "560px";
  x.style.width = "410px";
}

function normalImg2(x) {
  x.style.height = "550px";
  x.style.width = "400px";
}

function popup(){    
    var btn = document.getElementById("question").innerHTML;
    {
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
       
    }
}   
function close_popup(){    
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
}

function popup1(){    
    var btn = document.getElementById("question").innerHTML;
    {
        document.querySelector(".popup1").style.display = "flex";
        $(".popup1").animate({opacity: "1"}, "slow");
       
    }
}   
function close_popup1(){    
    $(".popup1").animate({opacity: "0"}, "slow");
    document.querySelector(".popup1").style.display = "none";
}
function popup2(){    
    var btn = document.getElementById("question").innerHTML;
    {
        document.querySelector(".popup2").style.display = "flex";
        $(".popup2").animate({opacity: "1"}, "slow");
       
    }
}   
function close_popup2(){    
    $(".popup2").animate({opacity: "0"}, "slow");
    document.querySelector(".popup2").style.display = "none";
}



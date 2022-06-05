const isMobile = /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent);
function mobileMode() {
  for (let i = 0; i < document.getElementsByClassName("mode").length ; i++){
    document.getElementsByClassName("mode")[i].style.margin = "3% 7%";
    document.getElementsByClassName("mode")[i].style.width = "35%";
  }
  document.getElementById("p").innerHTML='<img class = "icon" alt="Mobile mode" src="phone.png">';
  document.getElementById("c").innerHTML='<img class = "icon" alt="Computer mode" src="computer.png">';
    for (let i = 0; i < document.getElementsByClassName("normal").length ; i++){
      document.getElementsByClassName("normal")[i].style.width = "99.7%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton").length ; i++){
        document.getElementsByClassName("endPageButton")[i].style.width = "30%";
        document.getElementsByClassName("endPageButton")[i].style.margin = "0.3%";
    }
    if (document.getElementById("h") != null) {
    document.getElementById("h").innerHTML='<img class = "icon2" alt="Home" src="home.png">';
    document.getElementById("b").innerHTML='<img class = "icon2" alt="Back" src="back.png">';
    document.getElementById("n").innerHTML='<img class = "icon2" alt="Next" src="next.png">';
    }
    for (let i = 0; i < document.getElementsByClassName("empty").length ; i++){
        document.getElementsByClassName("empty")[i].style.width = "0.1%";
    }
    for (let i = 0; i < document.getElementsByTagName("ul").length ; i++){
      document.getElementsByTagName("ul")[i].style.marginLeft = "5%";
    }

  }
function computerMode() {
    for (let i = 0; i < document.getElementsByClassName("mode").length ; i++){
      document.getElementsByClassName("mode")[i].style.margin = "0.4% 0.9%";
      document.getElementsByClassName("mode")[i].style.width = "48%";
    }
    document.getElementById("p").innerHTML="Mobile mode";
    document.getElementById("c").innerHTML="Computer mode";

    for (let i = 0; i < document.getElementsByClassName("normal").length ; i++){
      document.getElementsByClassName("normal")[i].style.width = "32.9%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton").length ; i++){
        document.getElementsByClassName("endPageButton")[i].style.width = "20%";
    }
    for (let i = 0; i < document.getElementsByClassName("empty").length ; i++){
        document.getElementsByClassName("empty")[i].style.width = "20%";
    }
    if (document.getElementById("h") != null) {
      document.getElementById("h").innerHTML='Home';
      document.getElementById("b").innerHTML='Back';
      document.getElementById("n").innerHTML='Next';
    }
    for (let i = 0; i < document.getElementsByTagName("ul").length ; i++){
      document.getElementsByTagName("ul")[i].style.marginLeft = "20%";
    }
  }  
console.log("Is the device considered mobile: " + isMobile)
if (isMobile == true) {
   console.log("Mobile mode activated")
   mobileMode()
} else {  
  console.log("Computer mode activated")
  computerMode()
}

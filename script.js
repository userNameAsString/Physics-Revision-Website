const isMobile = /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent);
function mobileMode() {
    for (let i = 0; i < document.getElementsByClassName("mode").length ; i++){
      document.getElementsByClassName("mode")[i].style.margin = "3% 7%";
      document.getElementsByClassName("mode")[i].style.width = "35%";
    }
    for (let i = 0; i < document.getElementsByClassName("normal").length ; i++){
      document.getElementsByClassName("normal")[i].style.width = "99.7%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton").length ; i++){
        document.getElementsByClassName("endPageButton")[i].style.width = "30%";
        document.getElementsByClassName("endPageButton")[i].style.margin = "0.3%";
    }
    if (document.getElementById("h") != null) {
    document.getElementById("h").innerHTML='<img class = "icon" alt="Home" src="Images/home.png">';
    document.getElementById("b").innerHTML='<img class = "icon" alt="Back" src="Images/back.png">';
    document.getElementById("n").innerHTML='<img class = "icon" alt="Next" src="Images/next.png">';
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
    for (let i = 0; i < document.getElementsByClassName("normal").length ; i++){
      document.getElementsByClassName("normal")[i].style.width = "32.9%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton").length ; i++){
        document.getElementsByClassName("endPageButton")[i].style.width = "20%";
    }
    for (let i = 0; i < document.getElementsByClassName("empty").length ; i++){
        document.getElementsByClassName("empty")[i].style.width = "20%";
    }
    if (document.getElementById("4h") != null) {
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

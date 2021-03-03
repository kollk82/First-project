

//  Nav toggle for mobile screens


function nav_mobile() {
  var x = document.getElementById("nav-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Code for displaying login form and bluring background



var nab_bar = document.getElementById("nav_mobile");
              nab_bar.addEventListener('click', nav_mobile, false);

function pop_home() {
  document.querySelectorAll("HEADER")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("ARTICLE")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("ASIDE")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("FOOTER")[0].setAttribute("style", "filter: blur(4px);");
  document.getElementById("login_pop").setAttribute("style", "display: flex;");
}  

var blur_home = document.getElementById("pop_home");

if(blur_home){
  blur_home.addEventListener('click', pop_home, false);

}

function pop_portfolio() {
  document.querySelectorAll("HEADER")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll(".wrapper")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("FOOTER")[0].setAttribute("style", "filter: blur(4px);");
  document.getElementById("login_pop").setAttribute("style", "display: flex;");
} 

var blur_portfolio = document.getElementById("pop_portfolio");

if(blur_portfolio){
  blur_portfolio.addEventListener('click', pop_portfolio, false);
}

function pop_contact() {
  document.querySelectorAll("HEADER")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("SECTION")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("FOOTER")[0].setAttribute("style", "filter: blur(4px);");
  document.getElementById("login_pop").setAttribute("style", "display: flex;");
} 

var blur_contact = document.getElementById("pop-contact");
if(blur_contact){
  blur_contact.addEventListener('click', pop_contact, false); 
}
function pop_signup() {
  document.querySelectorAll("HEADER")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("SECTION")[0].setAttribute("style", "filter: blur(4px);");
  document.querySelectorAll("FOOTER")[0].setAttribute("style", "filter: blur(4px);");
  document.getElementById("login_pop").setAttribute("style", "display: flex;");
} 

var blur_signup = document.getElementById("pop-signup");
if(blur_signup){
  blur_signup.addEventListener('click', pop_signup, false); 
}

//code for website refresh to exit login form


function exit_pop(){
  window.location.reload();  
}
var exit = document.getElementById("exit");
if(exit){
  exit.addEventListener('click', exit_pop, false); 
}
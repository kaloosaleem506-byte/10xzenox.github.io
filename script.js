let cookies = 0;

let cookiesPerClick = 1;
let autoClickers = 0;
document.getElementById("click-btn").onclick = function(){
  
  cookies = cookies + cookiesPerClick;
  
  document.getElementById("score").innerHTML = "Cookies: " + cookies;
document.getElementById("click-btn").classList.add("clicked")
setTimeout(function(){
document.getElementById("click-btn").classList.remove("clicked"); 
},100);
  let floating = document.getElementById("floating");
floating.innerHTML = "+" + cookiesPerClick +"🍪";
floating.classList.remove("float");
void floating.offsetWidth;
floating.classList.add("float");
};
document.getElementById("upgrade-btn").onclick = function(){
  if(cookies>= 10){
    
    cookies = cookies - 10;
    
    cookiesPerClick = cookiesPerClick + 1;
    
    document.getElementById("score").innerHTML ="Cookies: " 
    + cookies;
    
    document.getElementById("click-btn").classList.add("clicked");
    
    setTimeout(function(){
      document.getElementById("click-btn").classList.remove("clicked");
      
    },100);
  }
};
document.getElementById("auto-btn").onclick = function(){
  if(cookies>= 100){
    cookies = cookies - 100;
    autoClickers = autoClickers + 1;
    document.getElementById("score").innerHTML =
      "Cookies: " + cookies;
  }
};
setInterval(function(){
  cookies = cookies + autoClickers;
  document.getElementById("score").innerHTML =
 "Cookies: " + cookies;
}, 1000);

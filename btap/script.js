let btn = document.getElementById("toggle");

btn.onclick = function(){

document.documentElement.classList.toggle("dark");

if(document.documentElement.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

};
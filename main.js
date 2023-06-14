let a=new Date;
let dat=a.getDate();
let mon=a.getMonth();
let year=a.getFullYear();
let hor=a.getHours();
let minut=a.getMinutes();
let sec=a.getSeconds()
let day=a.getDay();


let b=document.getElementById("date");
b.innerHTML=dat;
	
let c=document.getElementById("month");
c.innerHTML=mon+1;
	
let d=document.getElementById("year");
d.innerHTML=year;

let e=document.getElementById("hour");
e.innerHTML=hor;


let f=document.getElementById("minute");
f.innerHTML=minut;

let g=document.getElementById("second");
g.innerHTML=sec;

let h=document.getElementsByClassName("days");
h[day].style.accentColor="red";
console.log(h[day],day);

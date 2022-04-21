let a = document.getElementById("text");
console.log(a);
let b = document.getElementsByTagName("h1");
console.log(b[0]);
b[0].innerText = "hello world";
b[0].style.color = "red";
b[0].id = "heding";
function changetext() {
  b[0].innerText = "Welcome to elevation academy";
}
function flexcolumn() {
  let c = document.getElementsByClassName("card");
  c[0].style.flexDirection = "column";
}
function changeyear() {
  let s = document.getElementById("chooseyear").value;
  document.getElementById("selected").innerText = s;
}
function time() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
}
time();
setInterval(time, 1000);

function emailCheck() {
  let m = document.getElementById("email").value;
  if (!m.endsWith("prepbytes.com")) {
    let d = document.getElementById("emailcheck");
    d.style.display = "inline";
  } else {
    let d = document.getElementById("emailcheck");
    d.style.display = "none";
  }
}
function phonecheck() {
  let a = document.getElementById("phone").value;
  if (!a.startsWith("91")) {
    let b = document.getElementById("codecheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("codecheck");
    b.style.display = "none";
  }
  if (a.length != 10) {
    let b = document.getElementById("numbercheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("numbercheck");
    b.style.display = "none";
  }
}
function bcheck() {
  let a = document.getElementById("dom").value;
  if (a < 1995) {
    let b = document.getElementById("bcheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("bcheck");
    b.style.display = "none";
  }
}

var i = 0;
var txt = 'Full-Stack Web-Developer Constantly Learning Something New Each & Everyday!' 
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


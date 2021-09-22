window.onload = function() {
    setTimeout(function() {
        document.getElementById('GTR').style.display='block';
    }, 20);
  };
function picchange(anything){
    document.getElementById("pic").src = anything;
}
function actiiveparagraph(){
    document.getElementById('cevorlet').style.display='block';
    document.getElementById('GTR').style.display='none';
    document.getElementById('Mustang').style.display='none';
    document.getElementById('porcha').style.display='none';
    document.getElementById('teshla').style.display='none';
}
function actiiveparagraph1(){
    document.getElementById('cevorlet').style.display='none';
    document.getElementById('GTR').style.display='none';
    document.getElementById('Mustang').style.display='block';
    document.getElementById('porcha').style.display='none';
    document.getElementById('teshla').style.display='none';
}
function actiiveparagraph2(){
    document.getElementById('cevorlet').style.display='none';
    document.getElementById('GTR').style.display='block';
    document.getElementById('Mustang').style.display='none';
    document.getElementById('porcha').style.display='none';
    document.getElementById('teshla').style.display='none';
}
function actiiveparagraph3(){
    document.getElementById('cevorlet').style.display='none';
    document.getElementById('GTR').style.display='none';
    document.getElementById('Mustang').style.display='none';
    document.getElementById('porcha').style.display='block';
    document.getElementById('teshla').style.display='none';
}
function actiiveparagraph4(){
    document.getElementById('cevorlet').style.display='none';
    document.getElementById('GTR').style.display='none';
    document.getElementById('Mustang').style.display='none';
    document.getElementById('porcha').style.display='none';
    document.getElementById('teshla').style.display='block';
}
function changerootcolor(anything){
    document.documentElement.style.setProperty("--GTR", anything);
}
function closelogin(){
    document.getElementById('form').style.display='none';
}
function loginbutton(){
    document.getElementById('form').style.display='flex';
}
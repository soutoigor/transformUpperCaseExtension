var text = document.getElementById('toTransform');

var btnTransform = document.getElementById('transform');

var textTransformed = document.getElementById('transformed');

var btnCopy = document.getElementById('copy');


btnTransform.addEventListener('click', function(){
   textTransformed.textContent = text.value.toUpperCase(); 
});

btnCopy.addEventListener('click', function(){
   
    textTransformed.select();
    
    document.execCommand("copy");
    
    document.getElementById("alert").style.display = "block";
    
    setTimeout(function(){document.getElementById("alert").style.display = "none";},1500);
    
});
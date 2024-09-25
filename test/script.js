
let dollar =document.getElementById('dollar');
let pound = document.getElementById('pound'); 


dollar.onkeyup = function()
{
    pound.value = dollar.value * 50 ;
    
};
pound.onkeyup =function(){
    dollar.value = pound.value/50;
};

let afterButton =document.getElementById('btnAfter');
let BeforeButton =document.getElementById('btnBefore');
let appendButton =document.getElementById('btnAppend');
let content =document.getElementById('content');
let container =document.getElementById('dd');


 afterButton.onclick = function() {
            container.after(content);
 };

 BeforeButton.onclick = function() {
            container.before(content);
 };

 appendButton.onclick = function() {
            container.append(content);
 };



let hello= document.getElementById('hello');
hello.onclick = function(){
    this.classList.toggle("Container");
};






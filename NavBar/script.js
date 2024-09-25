let btnOpen =  document.getElementById('open');
let btnClose = document.getElementById('close');
//let container =document.querySelector('.Container');
let container =document.querySelector('.Container');

btnClose.onclick = function(){ 
    container.classList.add('hide');
    btnClose.classList.add('hide');
    btnOpen.classList.remove('hide');
    
};

btnOpen.onclick= function(){
    
    this.classList.add('hide');
    btnClose.classList.remove('hide');
    container.classList.remove('hide');
};





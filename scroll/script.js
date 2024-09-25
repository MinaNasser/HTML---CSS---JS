let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let mina=document.querySelector('.mina');

window.onscroll = function(){
    let value =scrollY;
    stars.style.left=value +'px';
    moon.style.top=value * 4 +'px';
    mountains3.style.top=value * 2 +'px';
    mountains4.style.top=value * 1.5 +'px';
    river.style.top=value+'px';
    boat.style.top=value+'px';
    boat.style.left=value*4+'px';
    mina.style.fontSize=value+'px';
    
    if(scrollY >=100){
        mina.style.fontSize=80+'px';
        mina.style.position='fixed';
        
        if(scrollY >=553){
            mina.style.display='none';
        }else{
            mina.style.display='block';
        }
        if(scrollY >=127){
            document.querySelector('.main').style.background ="linear-gradient(#04395f, #067dcc)";
        }
        else{
            ocument.querySelector('.main').style.background ="linear-gradient(#150035,#3d0083)";
                }
         }
}
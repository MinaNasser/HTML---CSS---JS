let btn = document.getElementById("btnScroll");
//console.log(btn);

window.onscroll = () => {
    if (scrollY >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = () => {
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};

let tout = setTimeout(() => {
    console.log("hello");
}, 3000);
clearTimeout(tout);

/*let i = -1;
let tint = setInterval(() => {
    console.log(++i);

    if (i == 0) {
        clearInterval(tint);
    }
}, 10);*/

/*
localStorage.setItem("name", "Mina");
localStorage.setItem("age", JSON.stringify(25));
localStorage.setItem("skils", JSON.stringify([1,2,3]));
localStorage.user=JSON.stringify({
    name: "Mina",
    age:25,
});



*/


let txt = document.getElementById('txt');
if(localStorage.length > 0){
    txt.value =localStorage.getItem('txt');
}
onkeypress = ()=>{
    localStorage.setItem('txt',txt.value);
};



if(localStorage.length > 0){
    document.body.style.background = localStorage.color;
}
function setColor(color){
    document.body.style.background= color;
    localStorage.setItem('color' , color);
}

//localStorage.clear();

/*

console.log(screen.height);
console.log(screen.width);
console.log("--------------------");
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log("--------------------");
console.log(screen.colorDepth);
console.log(screen.orientation.type);
*/

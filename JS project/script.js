let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}




let head1 =document.querySelectorAll('.head')[0];
head1.style.color='red';

let img1 = document.getElementById('image');
img1.src= "img/1.jpg";
img1.style.width ='300px';
let contaner1 =document.getElementById('Contaner');
let element1 =document.getElementById("second");
document.getElementById("Div_For_Test_Code").textContent =
element1;


contaner1.style.backgroundColor='#444';
contaner1.style.color='#fa0';
contaner1.style.border='8px solid #fa0';
// انشاء عناصر 
let contanner2= document.createElement('div');
let head2 = document.createElement('h2');
let img2 = document.createElement('img');
// اضافه محتوى 
let content2= document.createTextNode('Hello world');
head2.appendChild(content2);
img2.src="img/18.jpg";
img2.alt = "aye";
img2.style.width = '200px';
// اضافه العنصر في المكان المراد 
contanner2.appendChild(head2);
contanner2.appendChild(img2);
document.body.appendChild(contanner2);
contanner2.style.background= '#666';
contanner2.style.color= '#fff';
contanner2.style.padding= '10px';
contanner2.style.textAlign= 'center';
contanner2.style.border= '8px  solid  #f0a';
contanner2.style.borderRadius= '25px';
contanner2.style.margin= '10px';
//////////////////
// Create a new div element
let div = document.createElement('div');

// Set the inner HTML of the div to include the <br /> and <hr /> elements
div.innerHTML = '<br /><hr/><br/>';

// Append the div to the desired location in the document, e.g., the body
document.body.appendChild(div);




// Array of 100 names
const names = [
    "John", "Jane", "Alice", "Bob", "Charlie", 
    "David", "Emily", "Frank", "Grace", "Hannah",
    "John", "Jane", "Alice", "Bob", "Charlie", 
    "David", "Emily", "Frank", "Grace", "Hannah"
];
// Array of 100 ages
// Array of 10 ages with "years old" suffix
const ages = [
    "23 years old", "34 years old", "29 years old", "45 years old", "32 years old",
    "27 years old", "40 years old", "36 years old", "31 years old", "50 years old",
    "23 years old", "34 years old", "29 years old", "45 years old", "32 years old",
    "27 years old", "40 years old", "36 years old", "31 years old", "50 years old"
];

imageSources = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/18.jpg",
    "img/19.jpg",
    "img/20.jpg",
];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign= 'center';



function elementCard(name, agee,  imgsrc){
    //element
     let card =  document.createElement('div');
     let title = document.createElement('h2');
     let age =   document.createElement('p');
     let img =   document.createElement('img');
    
    //content
    
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(agee);
    img.src= imgsrc;
    title.appendChild(head);
    age.appendChild(ageContent);
    // style 
    card.style.width= '200px';
    card.style.background= '#444';
    card.style.color= '#FFF';
    card.style.padding= '10px';
    card.style.margin= '2px';
    card.style.display= 'inline-block';
    
    
    age.style.fontSize= '24px';
    age.style.fontWeight = 'bold';
    age.style.textDecoration = 'underline';
    
    img.style.width = '100%';
    img.style.height= '200px';
    img.style.borderRadius= '8px';
    img.alt= "Hello";
    
    
    ////
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    
    container.appendChild(card);
    
}


for(let i =0  ; i<20 ;i++){
    elementCard(names[i],ages[i],imageSources[i]);

}

 



let btn = 0 ; 
function btnEvent(){
    btn++;
    document.getElementById("txtBtn").textContent= 
        "Button Clicked times: "+btn;
    
}
function btnResetcounter(){
    
    document.getElementById("txtBtn").textContent= 
        "You are Reset Counter ";
    btn=0;
}

function btnIncr(){
    btn++;
    document.getElementById("txtBtn").textContent= 
        "Button Clicked times: "+btn;
}
function btnDec(){
    
    btn--;
    document.getElementById("txtBtn").textContent= 
        "Button Clicked times: "+btn;
}

/*

document.getElementById("btn_Click").onclick= btnEvent();
 document.getElementById("btn_Rest").onclick= btnResetcounter();
 document.getElementById("btn_Incr").onclick= btnDec();
 document.getElementById("btn_Dec").onclick= btnIncr() ;

*/



/*
let btn_Test=document.getElementById("btn_test");
let div_Test=document.getElementsByClassName("event");
function btnTest(){
    btn_Test.style.background ='red';
}

btn_Test.addEventListener('click',btnTest);


*/

let btn_Test=document.getElementById("btn_test");
let div_Test=document.getElementById("div_test");
btn_Test.addEventListener('click',function(){
    div_Test.style.background='red';
});

btn_Test.addEventListener('click',function(){
    btn_Test.style.background ='blue';
});

btn_Test.addEventListener('click',function(){
    btn_Test.style.color ='white';
});











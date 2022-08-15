var imgs=Array.from(document.querySelectorAll(".item img"))
var outbox=document.getElementById("outerBox")
var innerBox=document.getElementById("innerBox")
var close=document.getElementById("close")
var next=document.getElementById("next")
var prev=document.getElementById("prev")
var currentIndex=0 ;
for(var i=0;i<imgs.length;i++){

imgs[i].addEventListener("click",function(event){

outbox.style.display="flex"
var imgSrc=event.target.getAttribute("src")
innerBox.style.backgroundImage=`url(${imgSrc})`;
currentIndex=imgs.indexOf(event.target)
})

}
next.addEventListener("click",nextElement)
function nextElement(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0 ;
    }

 console.log(currentIndex)
 var imgSrc=imgs[currentIndex].getAttribute("src")
 innerBox.style.backgroundImage=`url(${imgSrc})`;
}
prev.addEventListener("click",prevElement)
function prevElement(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
    console.log(currentIndex)
    var imgSrc=imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage=`url(${imgSrc})`;
   }
   close .addEventListener("click",closeProduct)

   function closeProduct(){


    outbox.style.display="none" ;

}
document.addEventListener("keyup",function (eventInfo){
    if(eventInfo.code=="ArrowRight"){
        nextElement()
    }
    else if(eventInfo.code=="ArrowLeft"){
        prevElement()
    }
    else if(eventInfo.code=="Escape"){
        closeProduct()
    }
})
outerBox.addEventListener("click",function(eventInfo){
    if(eventInfo.target.getAttribute("id")=="outerBox"){
        closeProduct()
    }
})
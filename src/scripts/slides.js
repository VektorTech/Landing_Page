var leftA = document.getElementById("left");
var rightA = document.getElementById("right");
var slideShow = document.getElementsByClassName("slides");
let cur = 0;
let slideLen = slideShow.length;

rightA.onclick = () => {
   // slideShow[cur].style.position = 'absolute';
    slideShow[cur].style.width = '0';
    if(cur < slideLen-1){
        cur++;
    } else {    
        for(let i = 0; i < slideLen; i++){
            slideShow[i].style.width = '33.333%';
        }
        cur = 0;
    }   
}

leftA.onclick = () => {
    if(cur > 0){
        slideShow[cur-1].style.width = '33.333%';
        cur--;
    } else {
        for(let i = 0; i < slideLen-1; i++){
            slideShow[i].style.width = '0';
        }
        cur = 2;
    }
}
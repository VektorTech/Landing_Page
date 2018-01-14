let vid = document.getElementsByClassName("vid")[0];
let elem = document.getElementsByClassName("yy-tech-dev")[0];
let header = document.getElementsByClassName("header")[0];
let scrollVal = document.documentElement.scrollTop;

document.body.onscroll = () => {
    displayBanner();
};

let displayBanner = () => {
    if(document.documentElement.scrollTop <= scrollVal){
        header.style.height = '40px';
        scrollVal = document.documentElement.scrollTop;
    } else {
        header.style.height = '0';
        scrollVal = document.documentElement.scrollTop;
    }
    
    if(scrollVal >= elem.offsetTop){
        vid.style.display = 'none';
    } else {
        vid.style.display = 'block';
    }

    
};

displayBanner();
let vid = document.getElementsByClassName("vid")[0];
let elem = document.getElementsByClassName("yy-tech-dev")[0];

document.body.onscroll = () => {
    if(document.documentElement.scrollTop >= elem.offsetTop){
        vid.style.display = 'none';
    } else {
        vid.style.display = 'block';
    }
}
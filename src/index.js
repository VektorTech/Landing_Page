let css = require('./sass/style.scss');
let videoCtrl = require('./scripts/footer_ctrl.js');
let slider = require('./scripts/slides.js');
let images = require('./scripts/card_images.js');

let down = document.querySelector('.down');
let dest = document.querySelector('.slides').offsetTop;

down.onclick = function(){
   scrollDown();
}

scrollDown = () => {
    if(document.documentElement.scrollTop < dest){
        document.documentElement.scrollTop+=30; 
        requestAnimationFrame(scrollDown);
    }
};
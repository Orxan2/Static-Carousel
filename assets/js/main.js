window.addEventListener('load',function(params) {
    let lent = document.querySelector('.slider-wrapper');
let images = document.querySelectorAll('.preview li');
let imageWidth = 800;

images.forEach(function(el,index){
    // console.log(index)
    el.addEventListener('click',salam);

    function salam(params) {
        lent.style.left = '-' + imageWidth*index + 'px';
        console.log(lent);
        console.log(el);
    }
});
});
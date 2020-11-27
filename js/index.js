var btn = document.querySelector('#head button');
var ul = document.querySelector('#head ul');

var lock = true
btn.onclick = function () {

    ul.style.height = lock ? '250px' : '0';
    lock = !lock;
}

var pic = document.getElementById('pic');
var picUl = document.querySelector('#pic ul');
var picList = picUl.children;
var cn = 0;

var head = picList[0].cloneNode(true);
picUl.appendChild(head);
picUl.style.width = picList.length * 100 + 'vw';

function move() {
    picUl.style.transition = 'left .5s';
    picUl.style.left = -cn * 100 + 'vw';
}
picUl.addEventListener('transitionend', function () {
    if (cn == picList.length - 1) {
        picUl.style.left = 0;
        picUl.style.transition = '';
        cn = 0;
    }

})
function autoPlay() {
    cn++;
    if (cn >= picList.length) {
        cn = 0;
    }
    move();
}

var timer = setInterval(autoPlay, 2000)

pic.onmouseenter = function () {
    clearInterval(timer);
    timr = null;
}
pic.onmouseleave = function(){
    timer = setInterval(autoPlay, 2000);
}


/*
    visibilitychange        能见度更改事件，当页面显示或者隐藏的时候会触发
    document.hidden
        true        页面隐藏
        false        页面显示
 */

document.addEventListener('visibilitychange',function(){
    // console.log(document.hidden);

    if(document.hidden){
        clearInterval(timer);
        timer=null;
    }else{
        timer = setInterval(autoPlay, 2000);
    }
});
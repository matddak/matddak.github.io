// 텍스트가 스크롤할때마다 움직이게 하는것
let subText = document.querySelector(".ui-wrap");
window.addEventListener("scroll",function(){
    let value = window.scrollY;

    if(value<1000){
        subText.style.animation="reverse 1s ease-out forwards";
    } else {
        subText.style.animation="move-text 1s ease-in";
    }
});



const content = "우리 동네 맞닥뜨림";
const text = document.querySelector(".title-2");
let textIdx = 0;

function typing(){
    let txt = content[textIdx++];
    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)
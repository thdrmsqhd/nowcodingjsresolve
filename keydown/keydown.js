/*DOM에서 key클래스로 요소를 꺼낸 다음 playing클래스를 추가해주면 됩니다.*/
/*html에 있는 .key클레스를 끌어와서 변수에 삽입하고
처리한 내용을 css상의 .palying클레스에 추가한다.*/ 
window.addEventListener("keydown",playSound);

function playSound(e){
    var inputKey = e.keyCode;
    
    var key = document.querySelector(`div[data-key="${inputKey}"]`);
    var audio = document.querySelector(`audio[data-key="${inputKey}"]`);


    audio.currentTime = 0;
    audio.play();

    key.className = "key playing"
};

var keyArry = document.querySelectorAll(".key");
keyArry.forEach(function(key){
    console.log("반복")
    key.addEventListener("transitionend",removeTransition);
});

function removeTransition(e){ 
    console.log(e);  
    e.target.className = "key";
};

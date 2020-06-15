


//EX4: 엘리먼트 선택방법 개선하기를 이미 완료했기 때문에 ex번호 건너뜀
window.addEventListener("load",clickButton);

function clickButton(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");
    var inputs1 = box.childNodes[0]; // 공백(text)도 노드로 인식하여 반응이 한단계 느리다.
    var inputs2 = box.children[1]; // 테그를 대상으로 인식

    inputs1.value ="hello";
    inputs2.value ="okay";
};




//EX2: 엘리먼트 선택방법 개선하기
window.addEventListener("load",clickButton);

function clickButton(){
    var inputButtton = document.querySelector(".input-button");
    inputButtton.addEventListener("click",alertSum);        
};

function alertSum(){
    // console.log("event 발생")
    var inputNum1 = document.querySelector(".input-num1");
    var inputNum2 = document.querySelector(".input-num2");
    var totalNum = document.querySelector(".total-num");
    

    var inputNum1value = parseInt(inputNum1.value);
    var inputNum2value = parseInt(inputNum2.value);
    

    totalNum.value = inputNum1value + inputNum2value;

    // console.log(typeof inputNum1value)
      
}



//EX1: 계산기 프로그램
window.addEventListener("load",clickButton);

function clickButton(){
    var inputButtton = document.querySelector(".input-button");
    inputButtton.addEventListener("click",alertSum);        
};

function alertSum(){
    // console.log("event 발생")
    var inputNum1 = document.querySelector(".input-num1");
    var inputNum2 = document.querySelector(".input-num2");
    var totalNum = document.querySelector(".total-num");
    

    var inputNum1value = parseInt(inputNum1.value);
    var inputNum2value = parseInt(inputNum2.value);
    

    totalNum.value = inputNum1value + inputNum2value;

    // console.log(typeof inputNum1value)
      
}

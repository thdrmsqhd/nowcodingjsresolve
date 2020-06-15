    var handHour = document.querySelector("div.hand.hour-hand"); // 시침 접근
    var handMin = document.querySelector("div.hand.min-hand"); // 분침 접근
    var handSec = document.querySelector("div.hand.second-hand"); // 초침 접근

    var handHourStyle = handHour.style; // 시침 css접근
    var handMinStyle = handMin.style;   // 분침 css접근
    var handSecStyle = handSec.style;   // 초침 css접근

    setInterval(setDate,1000); // 1초에 한번 씩 함수를 실행한다.

    function setDate(){
        var today = new Date();
        var hours = today.getHours();      // 현재 시간
        var minute = today.getMinutes();   // 현재 분
        var seconds = today.getSeconds();  // 핸재 초
        
        var rotateHour = hours*30    // 시침의 각도
        var rotateMin = minute*6     // 분침의 각도
        var rotateSec = seconds*6 // 초침의 각도

        handHourStyle
        handHourStyle.transform = `rotate(${rotateHour+90}deg)`  // 시침의 각도를 적용
        handMinStyle.transform = `rotate(${rotateMin+90}deg)`    // 분침의 각도를 적용
        handSecStyle.transform = `rotate(${rotateSec+90}deg)`    // 초침의 각도를 적용

    }

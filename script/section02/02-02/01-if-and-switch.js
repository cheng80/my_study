//if 문 실습

if(1+1 === 2){ // 만약 1+1이 2와 같다면
    console.log("정답입니다."); // 정답입니다! 출력
}

if(1+1 === 2){ // 만약 1+1이 2와 같다면
    console.log("정답입니다."); // 정답입니다! 출력
}else{ // 만약 1+1이 2와 같지 않다면
    console.log("오답입니다."); // 오답입니다! 출력
}

//삼항연산자
const 공부점수 = 50;
const 결과 = 공부점수 >=60 ? "합격입니다." : "불합격입니다."; // 공부점수가 60점 이상이면 합격입니다. 아니면 불합격입니다.
console.log(결과);

//switch문 실습

switch(공부점수){
    case 100: // 만약 공부점수가 100점이면
        console.log("A+");
        break;
    case 90: // 만약 공부점수가 90점이면
        console.log("A");
        break;
    case 80: // 만약 공부점수가 80점이면
        console.log("B");
        break;
    case 70: // 만약 공부점수가 70점이면
        console.log("C");
        break;
    default: // 위의 경우가 모두 아니라면
        console.log("F");   
}

// const 친구들 = ["철수", "영희", "훈이", "맹구"];
// const 우리반 = 친구들.map((친구) => 친구 + "어린이");
// console.log(우리반); // ["철수어린이", "영희어린이", "훈이어린이", "맹구어린이"] 출력


const 친구들 = ["철수", "영희", "훈이", "맹구"];
const 우리반 = 친구들.map((친구) => {
    return 친구 + "어린이";
});
console.log(우리반);

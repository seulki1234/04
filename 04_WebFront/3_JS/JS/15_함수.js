//즉시 실행 함수 확인하기 (실무에서 자주사용 X)
//(끝날때 ; 꼭 넣기,오류남)

//페이지 로딩시 바로 수행됨
( function(){
    const str="저녁 메뉴 추천!";
    console.log(str);
})() ;

( function(){
    //변수명 중복되도 상관없음
    const str="아무값이나"
    console.log(str);
})() ;

//-----------------------------------------------------------------------

//화살표 함수(Arrow Function)-->실무에서 많이 사용

//1.기본형태 : ([매개변수]) => {}

document.getElementById("btn1").addEventListener("click",() => {
    alert("화살표 함수 기본형태")
});

//즉시 실행 함수 + 화살표 함수 
( () => {
    console.log("즉시 실행 함수 + 화살표함수");
})();


//2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2").addEventListener("click", e => {
    

    //매개변수 e(또는 event) : 이벤트 관련 정보를 모두 갖고잇는 객체
    //console.log(e);

    //e.target : 이벤트가 발생한 대상(요소)
    //console.log(e.target);

    e.target.style.backgroundColor = "yellow";

    //*********************화살표 함수 주의사항(중요!!!!!!!!!!) */
    //일반 함수에서 this 는 요소 자체였음(btn2)
    //but, 화살표 함수에서 this 는 window 객체를 나타내게 됨
    //(화살표 함수 내부에서 this 사용 불가) 
    //   ---->e.target으로 대체 (자주사용!!!!!!!!!!!!!!)
})


//3. {}, return 생략 : () => 값 또는 식
function print(fn){  //fn : 전달받은 함수
    console.log(fn(2));

}

document.getElementById("btn3").addEventListener("click", ()=>{
    
    //익명함수
    print(function( num ) { return num * 10 } )

    //화살표 함수
    print(num => num * 10 );
})
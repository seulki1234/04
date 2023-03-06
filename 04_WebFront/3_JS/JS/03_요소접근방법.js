//id로 접근하는 방법
function fnTest() {
    //id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");

    const bgcolor = div1.style.backgroundColor;

    //접근한 요소의 배경색을 얻어와 변수(bgcolor)에 저정
    if (bgcolor == "red") {

        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }

}


// class 로 접근하기(요소 여러개에 한꺼번에 접근하기)
function fnTest2() {
    const arr = document.getElementsByClassName("div2");

    //콘솔에 보여줌
    console.log(arr)
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])

    //백그라운드컬러가 바뀜
    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    //java와 for문 형식 동일함
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = i + '번째 요소입니다';
    }

}

//태그명으로 접근하기

function fnTest3() {

    //문서내에 존재하는 모든 li 요소를 얻어와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for (let i = 0; i < arr.length; i++) {

        const num = arr[i].innerText;

        arr[i].style.backgroundColor = "rgb(100," + num + ",130)"
    }



}

//input 태그값(value) 얻어오기/변경하기

function fnTest4() {

    //input 요소 접근하기 
    const input = document.getElementById("inputTest");

    //input 관련 태그에 작성된 값을 나타내는 속성 == value

    //input 요소에 작성된 값을 얻어와 alert 로 출력
    alert(input.value);


    //작성된 값이 alert 창에 뜨고, 확인 버튼을 눌렀을때 
    //작성하는 칸이 비워지게 만드는 명령문임
    input.value = "";

}

//name 속성으로 접근하기
function fnTest5() {


    //name 속성값이 "hobby"인 요소를 모두 얻어와 배열형식으로 반환
    const hobbyarr = document.getElementsByName("hobby");

    let str = "";//체크된 체크박스의 값을 누적할 변수 선언
    let count = 0; //체크개수 카운트


    for (let i = 0; i < hobbyarr.length; i++) {

        //checked 속성
        //해당 요소가 체크되어 있다면 true 아니면 false
        //radio, checkbox 에서만 사용가능

        if (hobbyarr[i].checked) { //check된 경우
            str += hobbyarr[i].value + "  "; //값 누적,  "  "이거는 띄어쓰기용


            count++;  // 1씩 증가
        }
    }

    const result5 = document.getElementById("result5");


    if (str != "") { //체크된것이 하나라도 있을때 

        result5.innerText = str;

        result5.innerHTML += "<br><br>선택된 개수 : " + count;

    } else { //체크된것이 하나도 없을때

        result5.innerText = "선택된 취미가 없습니다";
    }

}

//css 선택자로 접근하기
function fnTest6() {

    //id 속성값이 csstest 인 요소를 1개 선택

    document.querySelector("#cssTest").style.border = "3px solid green";

    //여러요소가 선택 됐을경우 첫번째 요소만 선택됨
    //div 에서 굳이 first child 안해줘도됨(어짜피 첫번째 요소만 선택되므로)
    document.querySelector("#cssTest > div").style.backgroundColor = "gold";

    const arr = document.querySelectorAll("#cssTest>div");

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }

}


function readValue() {// 입력된 값을 읽어들여 채팅창에 출력
    //채팅과 관련된 요소 모두 얻어오기

    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");


    
    //채팅이 정상적으로 입력된경우에만 출력
    if (input.value.trim().length > 0) {
        //문자열.trim() : 문자열 좌우 공백을 제거해줌(중간 공백 제거x)

        //채팅창에 입력된 값으로 채팅 추가
        bg.innerHTML += "<p><span>" + input.value + "</span></p>"

        //스크롤을 가장 아래로 내려주는것
        //요소.scrollTop : 요소 내부 현재 스크롤의 위치
        //요소.scrollHeight : 스크롤의 전체 높이
        //요소.scrollTop = 위치     :  스크롤을 특정 위치로 이동한다는뜻
        bg.scrollTop = bg.scrollHeight
        
        input.value = "";   //값을 누적할 변수 선언??


    }

    


}



function inputEnter() {
    //키보드 입력 과정
    //-키 누름 : keydown 이벤트 -> input 태그에 입력
    //->keypress ->(손을떼면)keyup 

    // keydown : 모든키가 눌렀을 때 
    // keypress : 영문/숫자/특수문자/띄어쓰기 눌렀을 때

    if (window.event.key == "Enter") {
        //눌러진 키가 엔터인경우

        readValue();
    }
}
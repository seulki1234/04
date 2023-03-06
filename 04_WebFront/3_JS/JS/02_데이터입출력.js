//innerHTML 로 읽어오기(요소 내부 내용(태그,속성,내용)을 읽어와 문자열로 반환)


function getInnerHTML1(){
    //HTML 문서 내에서 id 속성값이 "test1"인 요소를 얻어와
    //상수형 변수 t1에 저장 (const:블록범위의 상수를 선언)


    const t1 = document.getElementById("test1");

    //브라우저 콘솔에 출력
    console.log(t1.innerHTML);

}





//innerHTML 로 변경하기(태그, 속성이 해석됨(HTML Converter))
function setInnerHTML1() {
    const t1 = document.getElementById("test1");

    t1.innerHTML="<b class='red'> 변경됨<br><br>내용입니다</b>";
}


//add 함수 만들기
function add(){

    //1) id 속성값이 "area1"인 요소를 얻어와 변수에 저장
    const area1 = document.getElementById("area1");

    //2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>";
}





const t2 = document.getElementById("test2");


//innerText 로 읽어오기(내용만 얻어옴)
function getInnerText1(){
    console.log(t2.innerText);
}

//innerText로 변경하기
function setInnerText1(){
    t2.innerText="<b class='red'> 변경됨<br><br>내용입니다</b>";
}



//confirm (삭제할때 재확인하는 문구로 많이 사용됨)

function fnConfirm(){
    if(confirm("배경색을 분홍색으로 바꾸실래요?")) {
        document.getElementById("confirmTest").style.backgroundColor="pink";
    } else {
        console.log("취소함")
    }
}


//prompt("내용")
function fnPrompt(){
    const input=prompt("변경할 버튼명 입력하세요");
                    //입력한 값 or null

    if(input != null) {
        document.getElementById("promptTest").innerText=input;
    } else{
        alert("취소되었습니다")
    }


}
//js 파일 <script>태그 내부라고 생각할것

function btnclick3(){
    alert("external 방식이 클릭되었습니다");
}




//getElementbyId 사용법
//태그에 있는 id 속성을 사용하여 해당 태그에 접근하여 하고 싶은 작업을
// 할 때 쓰는 함수

function changecolor1(){
    document.getElementById("box").style.backgroundColor="red";
}

function changecolor2(){
    document.getElementById("box").style.backgroundColor="yellow";
}


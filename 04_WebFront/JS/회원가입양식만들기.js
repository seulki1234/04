//--------------------------------------------------------------------
//1. 아이디는 영어소문자로 시작
//영어 대/소문자, 숫자, -, _ 6-14글자 사이
//문자열인지 검사
//입력후, 다른곳에 키를 뒀을때 색 변화 잇어야함
//----형식이 일치할 경우 : 입력창 배경색을 green
//----형식이 일치하지 않을 경우 : 입력창 배경색을 red, 글자색을 white
//


document.getElementById("inputId").addEventListener("change",function(){
    
    const regEx1=/^[a-zA-Z0-9]{6,14}$/;
    //_, - 가능하게    확인(-)
    if(regEx1.test(this.value)){
        this.style.backgroundColor="green"; 
        this.style.color="white";
    }else{
        this.style.backgroundColor="red";
        this.style.color="white";
     
    }
})


//2.비밀번호란 미입력 상태에서 비밀번호 확인 작성시
//비밀번호를 입력해주세요 경고창 출력후 
//비밀번호 란에 focus 하기

const inputpw1= document.getElementById("inputpw1");
const inputpw2= document.getElementById("inputpw2");


inputpw2.addEventListener("keyup",function(){
    if(inputpw1.value.trim().length ==0 ){
        inputpw2.value = "";
        alert("비밀번호를 입력해주세요");
        inputpw1.focus();
    }
})


// document.getElementById("inputpw2").addEventListener("click",function(){
//     const inputpw1= document.getElementById("inputpw1");


//     if(inputpw1.value == ""){
//         alert("비밀번호를 입력해주세요");
//         document.getElementById("inputpw1").focus();
//         return; 
//     }
// })





document.getElementById("inputpw2").addEventListener("keyup",function(){
    const inputpw1= document.getElementById("inputpw1");
    const inputpw2 = document.getElementById("inputpw2");
    const pwcheck = document.getElementById("pwcheck");

    if(inputpw1.value == inputpw2.value){
        pwcheck.innerText="비밀번호일치"
        pwcheck.style.color="green";
    } else{
        pwcheck.innerText="비밀번호불일치"
        pwcheck.style.color="red";

    }
})


//3.이름
//한글 2-5글자 사이 문자열인지 검사
//-형식이 일치할경우 : 
//  "이름"입력창 오른쪽에 "정상입력" 글자를 초록색 출력
//-형식이 일치하지 않을경우
//  "이름"입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색 출력
    




document.getElementById("inputName").addEventListener("change",function(){
    const regEx2=/^[가-힣]{2,5}$/;
    const inputname=document.getElementById("inputName");
    const nameck=document.getElementById("nameck");

    if(regEx2.test(this.value)){
        nameck.innerText="정상입력";
        nameck.style.color="green";
    }else{
        nameck.innerText="한글만 입력하세요"
        nameck.style.color="red";
    }
})


//*성별이 선택되지않은경우
//*"성별을 선택해주세요" 경고창(대화상자) 출력 

//회원가입 버튼 클릭시 :validate()함수를 호출

function validate(){
//submit 기본 이벤트를 제거해줘야함


//체크된 라디오 버튼만 얻어오기
const gender=document.querySelector("input[name='gender']:checked")
if(gender == null) {
    alert("성별을 선택해주세요")
    ////return false 로, submit 기본 이벤트를 제거해줘야함
    return false;
}

document.getElementById("telnumber").addEventListener("keyup",function(){
    const regEx3=/^([0][0-9]{1,2})-([0-9]{3,4})-([0-9]{4})/;
    const telnumber=document.getElementById("telnumber");

    if(!regEx3.test(telnumber.value)){
        alert("전화번호 형식이 올바르지않음");
        ////return false 로, submit 기본 이벤트를 제거해줘야함
        return true; 
    }
})
}





const male = document.getElementById("male");
const female = document.getElementById("female");





//전화번호
//000-0000-0000('-'있어야함)
//-전화번호 형식이 올바르지 않을경우
//-전화번호 의 형식이 올바르지않음. 경고창(==대화상자) 출력



// document.getElementById("telnumber").addEventListener("keyup",function(){
//     const regEx3=/^([0-9]{3})[-]([0-9]{4})[-]([0-9]{4})$/;
//     const telnumber=document.getElementById("telnumber");

//     if(regEx3.test(this.value) == false){
//         alert("전화번호 형식이 올바르지않음");
//     }
// })







//회원가입 버튼 클릭시:validate() 함수 호출
//<form onsubmit="return validate();">


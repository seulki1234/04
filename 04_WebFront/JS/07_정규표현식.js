//정규표현식 객체 생성 및 확인하기


document.getElementById("check1").addEventListener("click",function(){
    
    //정규 표현식 객체 생성
    const regEx1 = new RegExp("script");
    //'script' 와 일치하는 문자열이 있는지 검사하는 정규식 객체 
    
    
    const regEx2 = /java/;
    //'java'와 일치하는 문자열이 있는지 검사하는 정규식 객체 

    const str1 = "저희는 지금 javascript를 공부하고 있습니다"

    const str2 = "java, db, html,css, js 모두 사용중"

    const str3 = "aaaaaaaaaaaajava, java, java"


    //확인하기
    //(객체).
    console.log("regEx1.test(str1) : " + regEx1.test(str1));
    console.log("regEx1.exec(str1) : " + regEx1.exec(str1));

    console.log("regEx1.test(str2) : " + regEx1.test(str2));
    console.log("regEx1.exec(str2) : " + regEx1.exec(str2));

    console.log("regEx1.test(str3) : " + regEx1.test(str3));
    console.log("regEx1.exec(str3) : " + regEx1.exec(str3));




    //확인하기
    console.log("regEx2.test(str1) : " + regEx2.test(str1));
    console.log("regEx2.exec(str1) : " + regEx2.exec(str1));

    console.log("regEx2.test(str2) : " + regEx2.test(str2));
    console.log("regEx2.exec(str2) : " + regEx2.exec(str2));

    console.log("regEx2.test(str3) : " + regEx2.test(str3));
    console.log("regEx2.exec(str3) : " + regEx2.exec(str3));



    console.log (regEx2.exec(str3))
})






//메타문자 확인하기

document.getElementById("check2").addEventListener("click",function(){

    //결과 출력용 div 가져오기
    const div1 = document.getElementById("div1");

    //이전 내용 삭제
    div1.innerText = "";

    //[abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regEx1 = /[abcd]/;

    div1.innerHTML += "/[abcd]/ , apple : " + regEx1.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/ , jhtg : " + regEx1.test("jhtg") + "<hr>";


    //^(캐럿) : 문자열의 시작을 의미
    const regEx2 = /^group/;
    div1.innerHTML += "/^group/ , group100 : " + regEx2.test("group100") + "<hr>";
    div1.innerHTML += "/^group/ , 100group : " + regEx2.test("100group") + "<hr>";
    
    
 


    //^[abcd] : 문자열이 a,b,c,d 중 하나로 시작하는지 검색
    const regEx3 = /^[abcd]/;
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("group") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , car : " + regEx3.test("car") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , dark : " + regEx3.test("dark") + "<hr>";
    
    
    
    //$(달러) : 문자열의 끝을 의미
    const regEx4 = /team$/ ;
    div1.innerHTML += "/team$/ , A-team : " + regEx4.test("A-team") + "<hr>";
    div1.innerHTML += "/team$/ , team-A : " + regEx4.test("team-A") + "<hr>";
    
    div1.innerHTML +=  regEx4.test("team-A") + "<hr>";

 


    //대문자 A,B,C,D 로 시작, - 로 이어짐 team 으로 끝나야할 때 
    //A-team, B-team, C-team, D-team
    //^[ABCD]-team$

    //시작은 영어 대문자, 끝은 숫자
    //^[A-Z][0-9]$    

    //특수 문자를 제외한 문자 하나
    //^[a-zA-Z0-9]$
  

})



 //Q. 만들어보기(실습 )
    

      //유효한 경우 초록색으로"유효한 이름형식"
    //유효하지 않은경우 빨간색 글씨로 "잘못된 형식"
    
    
    document.getElementById("inputname").addEventListener("keyup",function(){
        //한글2글자이상 6글자 이하 문자열
        //단자음/모음경우 제외
        const regEx5 = /^[가-힣]{2,6}$/;
        const result1 = document.getElementById("result1");

        
        //유효성검사
        if(regEx5.test(this.value)){
            result1.innerText="유효한 이름형식"
            //요소.classList : 요소가 가지고 잇는 클래스를 배열로 반환
            //요소.classList.add ("클래스명"): 요소에 특정 클래스 추가 
            //요소.classList.remove ("클래스명"): 요소에 특정 클래스 삭제
            //요소.classList.toggle ("클래스명"): 클래스가 있으면 제거, 없으면 추가
            result1.classList.add("confirm");
            result1.classList.remove("error");          
        }else{           
            result1.innerText="잘못된 형식"
            result1.classList.add("error");
            result1.classList.remove("confirm");
        }
    })




//배열확인
document.getElementById("btn1").addEventListener("click",function(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과','딸기','바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);


    //배열에 존재하지 않는 인덱스 값 대입시
    //->자동으로 추가되면서 길이 증가
    arr1[0] = '뽀로로';
    arr1[1] = 5000;
    arr1[2] = true;

    //중간 인덱스 건너뛰면 건너뛴 부분은 empty 로 남음
    arr1[5] = 111;
    console.log(arr1);

    //for문으로 배열요소 반복 접근하기

    //1. 일반 for문 - 배열, 컬렉션 모두 사용가능
    // for(let i=0; i<arr1.length; i++){
    //     console.log(arr4[i]);
    // }


    //2. 배열.forEach(function(item,index) {반복수행될 코드})
    //-배열에서만 가능함
    //-item : 현재 접근중인 요소
    //-index : 현재 인덱스


    //*여러 요소를 얻어온 경우(HTMLCollection, NodeList)는 
    //배열이 아니므로 foreach() 문 사용불가
    // arr4.forEach(function(a,i){
    //     console.log(i + " : " + a);
    //  })


    //3. for(item of 배열(또는 컬렉션)) {} - 배열, 컬렉션
    // == Java 의 향상된 for 문과 비슷함
    //(Symbol.iterator 가 존재하는 객체에 사용가능)
    for(let item of arr4) {
        console.log(item);
    }


    //li 태그에 작성된 값 얻어와서 합 구하기
    //HTMLCollection 구조
    //const list = document.getElementsByTagName("li");
    
    //NodeList 구조
    const list = document.querySelectorAll("#test > li")
    console.log(list);

    //3.4 구조를 가장 많이 사용함
    let sum = 0;
    for(let item of list) {
        sum += Number(item.innerText);
        //문자열 -> 숫자 형변환
    }
    console.log("sum : " + sum);

    //4. for(let key in 객체) -JS 객체용 for문
})

//배열관련 함수확인

document.getElementById("btn2").addEventListener("click",function(){

    //비어있는 배열 생성
    const arr = []; // == new Array();

    //배열.push(값) : 배열 마지막 요소로 전달한 값이 추가된다
    arr.push("초밥");
    arr.push("냉면");
    arr.push("삼겹살");
    arr.push("쌀국수");

    //배열.toString() : 배열 요소사이 "," 추가한 문자열 반환
    console.log(arr.toString());

    //배열.pop() : 배열의 마지막요소를 꺼내와 반환
    const temp = arr.pop();

    console.log("arr : " + arr.toString());
    console.log("temp : " + temp);


    //배열.indexOf("값")
    console.log("초밥인덱스: " + arr.indexOf('초밥'))

    //많이 사용되는 구문
    console.log('갈비가 arr에 있는지?' + 
            (arr.indexOf('갈비') != -1));


    //배열.sort()
    console.log(arr.sort())

    //숫자정렬의 문제점과 해결방법
    const numArr = [5, 3, 2, 10, 1];

    console.log(numArr.sort());  //->[1, 10, 2, 3, 5] 순서로 나옴
                                //->10 도 앞에 있는 1처럼 인식해버려서..

    //오름차순 (a-b)
    console.log(numArr.sort(function(a,b) { return a-b} ) );
    //버블정렬, 삽입정렬, 선택정렬
    //숫자기준 정렬 : [1, 2, 3, 5, 10]

    //내림차순(b-a)
    //console.log(numArr.sort(function(a,b) { return b-a} ) );

    //*sort()함수는 원본 배열의 순서를 정렬함. 즉 원본을 훼손한다는 말
    //-> 원본훼손 방지위해서는 깊은복사 이용해서 해결
    //(똑같은거 하나더 만들어서 하라는말)
    console.log(numArr);

    //배열.join("구분자")
    console.log(numArr.join("//"));


})
document.querySelector

// document.getElementById("btn3").addEventListener("click",function(){
//     // const random = Math.trunc(Math.random()*45+1);
//     // console.log("로또번호 : " + random);

//     const lotto = [];
//     for(i=1; i<7; i++){
//         const random = Math.trunc(Math.random()*45)+1;
//     lotto.push[random];
//     }
//     return lotto;
//     console.log("로또번호 : " + lotto);
//          //배열.join(",")
// })


//로또번호 만들기(중복안되게, 6개의 숫자 )
 document.getElementById("btn3").addEventListener("click",function(){
           const lotto = []; //lotto 배열선언,6개로
         
           for(i=1; i<7; i++){
             const random = Math.trunc(Math.random()*45)+1;
             lotto.push (random); //push 하는걸 생각못했음.....
            
             if(lotto.indexOf('random') != -1){
                    lotto.push(random)
             }
           }
           console.log("로또번호 : " + lotto );

      })

//반복문안에서 함수 반복하는거 못했고,
//중복제거 못했음
// document.getElementById("btn3").addEventListener("click",function(){
//     const lotto = [];

//     while(lotto.length < 6) {
//         //1~45 난수
//         const ran = Math.floor(Math.random()*45+1);
        
//         //중복검사

//         //배열에 난수값이 없으면
//         if(lotto.indexOf(ran) == -1) {
//             lotto.push(ran);
//         }
//     }

//     lotto.sort(function(a,b) {return a-b;}) //오름차순 정렬
//     console.log('로또번호 :' + lotto)
// })
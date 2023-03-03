//Node확인하기
document.getElementById("btn1").addEventListener("click",function(){

    //부모Node에 접근
    //요소.parentNode : 요소의 부모 노드를 탐색해서 반환

    //자식Node에 접근
    //요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태)
    //요소.firstChild : 첫번째 자식 노드를 탐색해서 반환
    //요소.lastChild : 마지막 자식 노드를 탐색해서 반환
    //요소.childNodes[인덱스] : 인덱스 번째 자식노드를 탐색해서 반환

    //형제Node에 접근
    //요소.previousSibling : 요소의 이전 형제 노드를 반환
    //요소.nextSibling : 요소의 다음 형제 노드를 반환


    //#test의 자식노드를 모두 얻어와 확인
    //node는 공백까지 모두 읽어옴
    const testNodeList = document.getElementById("test").childNodes;
    console.log(testNodeList)

    //노트 탐색
    const li1 = document.getElementById("li1")
    console.log(li1.parentNode); //부모 노드 탐색(ul#test)

    //#li1 의 부모의 배경색을 orange로 변경 (노드 탐색 활용 방법)
    li1.parentNode.style.backgroundColor = "orange"; //확인-----
    console.log(li1.parentNode.style.backgroundcolor)


    //#li1의 부모노드의 마지막 부분에 "ABCD" 라는 text node 추가
    //요소.append(요소 또는 노드) : 마지막 자식으로 추가(덧붙임)
    li1.parentNode.append("ABCD");

    //#test 의 첫번째 자식노드 찾기
    
    const test = document.getElementById("test")

    test.firstChild
    console.log(test.firstChild)

    //#test의 마지막 자식 노드 찾기

    test.lastChild
    console.log(test.lastChild);

    //#test의 자식노드중 5번째 인덱스 노드 찾기

    test.childNodes[5];
    console.log(test.childNodes[5]);

    //#test의 자식노드 중 5번째 인덱스 노드의 마지막 자식으로 "zzz" 추가하기

    test.childNodes[5].append("zzz");
    console.log(test.childNodes[5])

    //#test의 자식노드중 5번째 인덱스의 다음형제노드

    test.childNodes[5].nextSibling
    console.log(test.childNodes[5].nextSibling)

        //#test의 자식노드중 5번째 인덱스의 이전형제노드
        test.childNodes[5].previousSibling
        console.log(test.childNodes[5].previousSibling)


    //노드 탐색 구문 연속 작성
    //#test의 자식노드중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드

    test.childNodes[5].previousSibling
    console.log(test.childNodes[5].previousSibling.previousSibling)
})

//Element(요소 ) 탐색 확인
document.getElementById("btn2").addEventListener("click",function(){

    const test = document.getElementById("test")//부모요소
    const li1 = document.getElementById("li1")//자식요소

    //#li1의 부모요소 탐색
    li1.parentElement
    console.log(li1.parentElement)

    //#li1의 부모요소의 부모요소 탐색
    li1.parentElement.parentElement
    console.log(li1.parentElement.parentElement)

    //#test의 모든 자식요소 탐색
    
    test.children
    const list = test.children 
    console.log(test.children)   //HTML collection 형태로 반환

    //#test의 첫번째 자식요소
    test.firstElementChild
    console.log(test.firstElementChild)

    //#test 의 마지막 자식요소
    test.lastElementChild
    console.log(test.lastElementChild)

    //#test의 자식요소 중 2번째 인덱스
    test.children[2]
    console.log(test.children[2])

    //------------------------------------------------------

    //#test의 자식요소 중 2번 인덱스의 이전 형제요소 클릭시 
    list[2].previousElementSibling.addEventListener("click", function(){
          //작성된 내용을 alert로 출력

    //this == 이벤트가 발생한 요소
    //==#test 의 자식요소중 2번 인덱스의 이전 형제 요소
    alert(this.innerText);

    
    //이벤트가 발생한 요소의 다음다음 형제요소의 배경색을 red로 변경
    this.nextElementSibling.nextElementSibling.style.backgroundColor="red";

    })
  
  //----------------------------------------------------------------------

})

//innerHTML 
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

//10번까지만 작성되게 하려면, if 문과, count 필요

let count3 = 1;
btn3.addEventListener("click",function(){
    if(count3 <= 10) {
        const input = "<input type='text'>";

        div3.innerHTML += "<div>" + count3 + input + "</div>"
   // <div>
        //     count3
        //     <input type='text'/>

        // </div>
        
        count3++;
    }
})

//createElement()
const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");

let count4 = 1;

btn4.addEventListener("click",function(){
    if(count4 <= 10){
        //document.createElement("태그명")
        //->해당 태그 요소를 생성하여 반환
        //->요소를 생성할 뿐, 화면에 추가되는것이 아님

        const div = document.createElement("div");  // <div></div>태그를 만들어줌
        // <div>
        //     1
        //     <input></input>
        // </div>
        const input = document.createElement("input"); //<input></input>태그를 만들어줌

        // <div>
        //     count4
        //     <input type='text'/>

        // </div>

        div.innerText = count4;
        count4++;

        //input 을 div의 마지막 자식으로 추가
        //요소.append(노드 또는 요소)
        //->요소의 마지막 자식으로 추가
         // <div>
        //     <input></input>
        // </div>
        div.append(input);

        //#div4의 마지막 자식으로 추가
        //div4라는 area 영역에 <div> <input></input> </div> 을 추가한다는말
        div4.append(div);



    }
})























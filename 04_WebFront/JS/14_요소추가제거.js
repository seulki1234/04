//추가 버튼 클릭시 동작
document.getElementById("add").addEventListener("click", function () {


    //     <div class="row">
    //             <input type="number" class="in">
    //             <span class="remove">&times;      </span>
    //     </div>


    //위에와 같은 형식으로 만들것
    //div 요소 생성
    //document.createElement("태그명")
    //->해당 태그 요소를 생성하여 반환
    //->요소를 생성할 뿐, 화면에 추가되는것이 아님
    const div = document.createElement("div");  //<div></div> 태그를 만들어줌

    //div 에 row class 추가
    div.classList.add("row"); //<div class="row"></div>


    //------------------------------------------------------
    //input 요소 생성
    const input = document.createElement("input");   //<input></input>

    //input in class 추가
    input.classList.add("in");    //<input class="in"></input>


    //*요소에 속성을 추가하거나 변경할 때 사용하는 함수
    //요소.setAttribute("속성명", "속성값");
    // <-> 요소.removeAttribute("속성명") : 속성제거

    //input에 type = "number"추가

    input.setAttribute("type", "number"); // <input type="number" class="in">


    //------------------------------------------------------
    //span 요소 생성
    const span = document.createElement("span") //<span></span>

    //span 에 remove class 추가
    span.classList.add("remove"); //<span class="remove"></span>

    //span 에 &times; 추가
    span.innerHTML = "&times;";  //<span class="remove">&times;</span>


    //remove 이벤트를 document.getElementById("add").addEventListener("click",function(){
    //내에 만들어 줘야함.
    //span 에 click 이벤트 동작 추가(동적요소에 동적으로 이벤트 추가)
    span.addEventListener("click", function () {
        //alert("동적요소이벤트 추가")
        //클릭된  X 버튼의 부모요소(div.row)를 삭제 
        //요소.remove() : 해당 요소를 제거
        // X 버튼(span), inputbox(input) 둘다 제거해야하므로, span 의 부모인 div를 삭제
        this.parentElement.remove();
    })


    //-------------------------------------------------------------------
    //  <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    //  </div> 
    //형태로 조립하기 (div > input ,span)

    //요소.append(노드 또는 요소)
    //->요소의 마지막 자식으로 추가
    div.append(input, span);

    //.container 에  div 를 마지막자식으로 추가
    document.querySelector(".container").append(div)

    input.focus();

})

//계산 버튼이 클릭 되었을때 
//input 요소에 작성된 값을 모두 얻어와 합한 후 출력
//(여기서 정적으로 이벤트 걸어줄 수 있음. )
//이유는? HTML 에서 수시로 변하는게 아니라, clac("계산") 함수가 호출된 시점의 
//HTML 화면을 기반으로 해서 해석하므로!!

document.getElementById("calc").addEventListener("click", function () {

    //함수는 호출된 시점의 HTML 화면을 기반으로 해서 해석 진행!!
    const inputList = document.getElementsByClassName("in");

    let sum = 0;
    for (let input of inputList) {
        sum += Number(input.value) //input 요소에 작성된 값을 누적
        //요소에서 읽어온 값 또는 내용은 무조건 string 이므로 
        //->데이터 형변환(number )한거임
    }

    alert("합계 : " + sum);
})

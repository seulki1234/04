const boxarr = document.getElementsByClassName("box");

const colorinputarr = document.getElementsByClassName("colorinput");

//colorinput 값 입력시, box 값변경
for(let i =0; i<colorinputarr.length; i++){

    colorinputarr[i].addEventListener("keyup",function(){
        boxarr[i].style.backgroundColor=this.value;
        colorinputarr[i].style.color=this.value;
})
}

//duration 숫자 변경시->현재 duration 숫자 변경
document.getElementById("btn1").addEventListener("click",function(){
   duration.innerText = inputnumber.value;
})

//duration 숫자 변경시->현재 transitionduration 숫자 셋팅 변경
document.getElementById("inputnumber").addEventListener("keyup", function() {
    for(let i =0; i < colorinputarr.length; i++) {
        boxarr[i].style.transitionDuration = inputnumber.value + "s";
    }
})
 

//초기화 버튼 누를시->text,color,duration 지정한 것 모두 초기화하기
document.getElementById("btn2").addEventListener("click",function(){

    inputnumber.value=null;
    duration.innerText=null;

    for(let i = 0; i < boxarr.length; i++ ){
        boxarr[i].style = null;
        colorinputarr[i].value = null;
    }
})





// const colorbox1 = document.getElementById("colorbox1");
// const colorbox2 = document.getElementById("colorbox2");
// const colorbox3 = document.getElementById("colorbox3");
// const colorbox4 = document.getElementById("colorbox4");
// const colorbox5 = document.getElementById("colorbox5");

// const colortext1 = document.getElementById("colortext1");
// const colortext2 = document.getElementById("colortext2");
// const colortext3 = document.getElementById("colortext3");
// const colortext4 = document.getElementById("colortext4");
// const colortext5 = document.getElementById("colortext5");

// const duration = document.getElementById("duration");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");




// 초기화 버튼 누를시->text,color,duration 지정한 것 모두 초기화하기




// //text 입력시 상자색 변경
// colortext1.addEventListener("keyup",function(){
//     colorbox1.style.backgroundColor=colortext1.value;
//     colortext1.style.color=colortext1.value;
// })



// colortext2.addEventListener("keyup",function(){
//     colorbox2.style.backgroundColor=colortext2.value;
//     colortext2.style.color=colortext2.value;
// })

// colortext3.addEventListener("keyup",function(){
//     colorbox3.style.backgroundColor=colortext3.value;
//     colortext3.style.color=colortext3.value;
// })

// colortext4.addEventListener("keyup",function(){
//     colorbox4.style.backgroundColor=colortext4.value;
//     colortext4.style.color=colortext4.value;
// })

// colortext5.addEventListener("keyup",function(){
//     colorbox5.style.backgroundColor=colortext5.value;
//     colortext5.style.color=colortext5.value;
// })



// //duration 숫자 변경시->현재 duration 숫자 변경

// btn1.addEventListener("click",function(){
//     duration.innerText = inputnumber.value;
// })




// //duration 숫자 변경시->현재 transitionduration 숫자 셋팅 변경
// btn1.addEventListener("click", function(){
//     colorbox1.style.transitionDuration = inputnumber.value + "s";
//     colorbox2.style.transitionDuration = inputnumber.value + "s";
//     colorbox3.style.transitionDuration = inputnumber.value + "s";
//     colorbox4.style.transitionDuration = inputnumber.value + "s";
//     colorbox5.style.transitionDuration = inputnumber.value + "s";
    
// })


// //초기화 버튼 누를시->text,color,duration 지정한 것 모두 초기화하기
// btn2.addEventListener("click",function(){
//     inputnumber.value=null;
//     duration.innerText=null;

//     colorbox1.style = null;
//     colortext1.value = null;

//     colorbox2.style = null;
//     colortext2.value = null;

//     colorbox3.style = null;
//     colortext3.value = null;

//     colorbox4.style = null;
//     colortext4.value = null;

//     colorbox5.style = null;
//     colortext5.value = null;
// })







const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const result=document.getElementById("result");



function calc(btn) {


    const op = btn.innerText; //-> +, -, *, / % 중에서 들어옴


    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

   //new function()
    //eval("코드 형식의 문자열")
    //->매개변수의 문자열을 JS 코드로 해석/수행 함수
    //->속도가 느림+ 보안 이슈로 인해 사용X 
    //->대체제로 new function() 사용함
    //eval(n1 + op + n2); (X)

    //new function()

    //"return "  아래 문장에서 return 뒤에 띄어쓰기 해야함
    result.innerText = new Function("return " + n1 + op + n2)();

    //return n1 +(-,*,/,%) n2;

}
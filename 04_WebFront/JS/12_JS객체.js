//객체 생성1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){

    //{} 객체 생성 및 다루기
    //** 중요 */
    //JS 객체의 key 는 무조건 String (묵시적으로 String 이라는말)
    //->key 작성싱 "", '' (따옴표 X ) 모두 String으로 인식함

    const brand = "스타벅스";

    const product = {
        "pName" : "텀블러",
        'brand' : "투썸플레이스",
        color : ["red", "black", "silver"],
        price : 30000,
        'information' : function(){ //product객체의 기능
            //const brand = "메가커피";
            //지역변수로 다시 생성해주면, 지역변수를 읽어옴 ?

            console.log(brand);
            //객체 내부 함수에서 변수명을 작성하면, 
            //해당 객체의 변수가 아닌,(==지역변수가 아닌 "투썸플레이스" 가 아닌)
            //전역변수가 선택됨(brand-->"스타벅스")
            //이유는? 같은 객체의 변수(key)를 선택하는 방법이 별도로 존재함

            //**객체내부에서 this == 현재객체 */
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);
        }
    };

    //product 에 해당하는 모든값 가져옴
    console.log(product)

    //객체기능 호출을 하려면 information 이라는 key 값을 써줘야함 //스타벅스나옴
    product.information();

    //객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");
    
    div1. innerHTML = "";

    //객체의 값을 얻어오거나 대입하는 방법
    //1) 얻어오기 : 객체명.key  (여기서는 key 값 이 brand, color,pname,price)
//                 객체명['key']
    //2) 대입하기 : 객체명.key = 값;
    //              객체명['key'] = 값;

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";
    //key 에 대입되어있는 값이 나옴


    //product.price 값 변경
    //product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    //JS 객체에 없는 key 에 값 대입하기
    //->객체에 추가가 됨!!
    product.capacity = "550ml";
    console.log(product);

    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    //객체의 key 제거방법
    // -> delete 객체변수명.key
    //delete product.color;
    //console.log(product);
    //color 사라짐

    //객체명['key']방법으로
    //객체가 가지고 있는 모든 값 출력하기
    // -> for in 구문(객체 전용 for 문)

    div1.innerHTML += "product['capacity'] : "+ product['capacity'] + "<br>";
    div1.innerHTML += "<hr>";

    //for(let key in 객체명) : 매 바퀴마다 객체의 K 를 하나씩 얻어와
    //key 변수에 저장
    //(자바에서 쓰는 향상된 for 문과 같은 개념)

    for(let key in product) {
        //객체의 K 는 모두 string =='pName', 'price'
        div1.innerHTML += product[key] + "<br>"
                        //key 에 해당하는 value 값만 걍 다 불러옴(함수까지 실행을 못함..
                        //함수까지 불러오려면, 다른 명령어를 추가해줘야함)

    }
})


// for in vs for of 차이
// for in 은 객체를 순환하여 가져오고 (key 값 또는 index )
//  ex) const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// for of 는 배열을 순환하여 가져온다. (배열의 값)
// const arr = ['a','b','c'];







//생성자 함수
document.getElementById("btn2").addEventListener("click",function(){

    const div2 = document.getElementById("div2");

    const stdList = []; //비어있는 배열 생성

    //2. 생성자 함수 호출 : new 생성자함수명(매개변수)
    //stdList 라는 배열에 여러 값 넣어주기
    stdList.push(new Student(1, 2, "홍길동1"))
    stdList.push(new Student(3, 10, "홍길동2"))
    stdList.push(new Student(4, 5, "홍길동3"))
    stdList.push(new Student(5, 4, "홍길동4"))

    //이전 내용들 삭제
    div2.innerHTML = "";
    
    //for of : 배열/컬렉션 요소 반복 접근용 for문
   //[Student{}, Student{}, Student{}, Student{},] 이런상태로 대입된 상태임
   
   //stdList 안의 값을 std에 넣어줌
   for(let std of stdList){ 
        console.log( 'std ::'+ std)

        //for in : 객체의 키 반복 접근용 for문
        for(let key in std){
            console.log( 'key ::'+ key)
           
           
            //std[key]의 자료형이 'function' 이면 실행 후 출력
            //함수는 std[key]() 이렇게 불러줘야함
            
            if(typeof std[key] == 'function'){
                div2.innerHTML += key + " : " + std[key]() + "<br>";
            }else {
                div2.innerHTML += key + " : " + std[key] + "<br>";
            }
        }
            

        div2.innerHTML +="<hr>";
    }


})

//함수밖에서 만들어줘야함


//1. 생성자 함수 정의 : 생성자 함수의 시작은 반드시 대문자!!!!!!!!!1
function Student(grade, ban, name){
    //JS 함수의 매개변수는 let, const, var 를 적지 않음!
    //->안적어도 해당 함수의 지역변수로 취급

    //생성자 함수에서의 this
    // ==new 연산자를 통해서 만들어지는 객체 (앞으로 만들어질 객체)

    //속성 (this.   이렇게 정의해줘야함)
    this.grade = grade;
    this.ban = ban;
    this.name= name;

    //기능
    this.introduce = function(){
        return this.grade + "학년" + this.ban + "반" + this.name;
    }
}


//JSON

document.getElementById("btn3").addEventListener("click",function(){

    const std = new Student(5,7,"김영희");

    console.log(std)//객체
    console.log(JSON.stringify(std)) ; //객체(std)->JSON 문자열로 변환

    //**JSON 변환 시 객체의 기능은 포함되지 않는다!!!! */
    //JSON은 데이터 전달에 특화된 형태



    const member = '{"memberId" : "user01", "memberPw" : "pass01", "age":"20"}'

    console.log(member) //JSON 문자열
    console.log(JSON.parse(member)) //JSON->객체

});



















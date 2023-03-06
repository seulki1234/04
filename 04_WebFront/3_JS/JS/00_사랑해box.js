
// const love=["사랑해","사랑해사랑해","사랑해사랑해사랑해","사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해"
// ,"사랑해사랑해사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해사랑해사랑해",
// "사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해"
// ,"사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해"]

// const content = document.getElementById("content");
// let i=0;
// content.addEventListener("mouseover",function(){
//     for(i=0; i<10;i++){
//         this.style.backgroundColor="red";
//         this.style.color="white";
//         this.innerText=love[i];
//         i++;
//     } 
//     this.style.backgroundColor="black";
//         this.style.color="white";
//         this.innerText="그만해";})




const box = document.getElementById("box");
let count = 0;
document.getElementById("box").addEventListener("mouseover",function(){
    box.innerHTML = "사랑해";    
    this.style.color = "white";
    this.style.backgroundColor = "red";
    this.style.fontFamily = "궁서";
    count++;
    if(count <= 10){
        document.getElementById("box").addEventListener("mouseover",function(){
            box.innerHTML += "사랑해";}); 
    }else{
        document.getElementById("box").addEventListener("mouseover",function(){
            box.innerHTML = "그만해!!!";
        this.style.backgroundColor = "black";
    })
    }           
})
    
    
    
    
    
  

const love=["사랑해","사랑해사랑해","사랑해사랑해사랑해","사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해"
,"사랑해사랑해사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해사랑해사랑해",
"사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해","사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해"
,"사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해사랑해"]

const content = document.getElementById("content");
let i=0;
content.addEventListener("mouseover",function(){
    for(i=0; i<10;i++){
        this.style.backgroundColor="red";
        this.style.color="white";
        this.innerText=love[i];
        i++;
    } 
    this.style.backgroundColor="black";
        this.style.color="white";
        this.innerText="그만해";})
    
    
    
    
    
  
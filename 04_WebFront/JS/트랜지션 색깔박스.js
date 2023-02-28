//배열로 나타내기 
//첫배열일때, 
//for(i=0; i<5; i++ ) 
// if(i<5) {}



document.getElementById("input1").addEventListener("keyup",function(){
    const div1 = document.getElementById("div1");
    div1.style.backgroundColor=this.ariaValueMax;
})

document.getElementById("input2").addEventListener("keyup",function(){
    const div2 = document.getElementById("div2");
    div1.style.backgroundColor=this.ariaValueMax;
})

document.getElementById("input3").addEventListener("keyup",function(){
    const div3 = document.getElementById("div3");
    div1.style.backgroundColor=this.ariaValueMax;
})

document.getElementById("input4").addEventListener("keyup",function(){
    const div4 = document.getElementById("div4");
    div1.style.backgroundColor=this.ariaValueMax;
})


document.getElementById("input5").addEventListener("keyup",function(){
    const div5 = document.getElementById("div5");
    div1.style.backgroundColor=this.ariaValueMax;
})


const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");


input1.addEventListener("keyup",function(){
    
    window.setTimeout(function(){
        div1.style.backgroundColor=this.value;
    },3000);
})

input2.addEventListener("keyup",function(){
    
    window.setTimeout(function(){
        div1.style.backgroundColor=this.value;
    },3000);
})

input3.addEventListener("keyup",function(){
    
    window.setTimeout(function(){
        div1.style.backgroundColor=this.value;
    },3000);
})

input4.addEventListener("keyup",function(){
    
    window.setTimeout(function(){
        div1.style.backgroundColor=this.value;
    },3000);
})

input5.addEventListener("keyup",function(){
    
    window.setTimeout(function(){
        div1.style.backgroundColor=this.value;
    },3000);
})
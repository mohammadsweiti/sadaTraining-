const n1ele = document.getElementById("n1");
const n2ele = document.getElementById("n2");
const res = document.getElementById("result");
const sum= ()=>{
    const n1 = Number(n1ele.value);
    const n2 = Number(n2ele.value);
    const result1 = n1+n2;
    res.innerHTML= "= " + result1; 
    res.style.backgroundColor = "red";
    res.style.border = "blue 2px dashed";
}
const sub= ()=>{
    const n1 = Number(n1ele.value);
    const n2 = Number(n2ele.value);
    const result1 = n1-n2;
    res.innerHTML= "= " + result1; 
}
const div = ()=>{
    const n1 = Number(n1ele.value);
    const n2 = Number(n2ele.value);
    const result1 = n1/n2;
    res.innerHTML= "= " + result1; 
    res.classList.toggle('border');
}
const mul = ()=>{
    const n1 = Number(n1ele.value);
    const n2 = Number(n2ele.value);
    const result1 = n1*n2;
    res.innerHTML= "= " + result1; 
   
    res.addEventListener("click",()=>{
        console.log("mohammd");
        

    })
}


/*
const cal = (e)=>{
    e.preventDefault();

}
*/



const divelem = document.getElementById("square");
divelem.innerText = "Hi";
divelem.style.backgroundColor = "red";
divelem.style.maxWidth = "fit-content";


divelem.addEventListener("mouseover",()=>{

    divelem.classList.toggle("one");
    divelem.addEventListener("mouseover",check)
   

})



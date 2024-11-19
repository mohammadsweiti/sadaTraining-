console.log("hello from file");
const a = 10;
console.log(a);

let b = 15;
console.log("b = "+ b);

const c = "hello";

const d = "hello";

console.log(c+" "+d);


let e = 10 ;

console.log(c.endsWith("lo"));
console.log(c.charAt(0));
console.log(c.indexOf('o'));


let  n1,n2,op;

n1 = 10;
n2 =20 ;
op = '-';
switch(op){
    case '+':{
        const result = n1 + n2 ;
        console.log(result);
        break;
    }
    case '-':{
        const result = n1 - n2 ;
        console.log(result);
        break;

    }
    case '*':
        {
        const result = n1 * n2 ;
        console.log(result);
        break;
        }

    case '/':
        {

            const result = n1 / n2 ;
            console.log(result);
            break;

        }    
        
    }


const aa = ["first",1 ,2,3,4,5,6,"mohmamad",{x:12}];

console.log(aa[7]);
console.log(aa[6]);
console.log(aa[5]);
console.log(aa[4]);
console.log(aa[1]);


//////////////////////////////////////----------------------
const w = aa.at(0)
console.log(w);


const bb = [44,55];
const cc = bb.concat(aa);
console.log(cc);

///////////////////////////////////.................................

function sum(n1,n2){
    return n1+n2;
}
console.log(sum(5,8));

//document.write(sum(3,13));
// document.write( " this is the new file")

sum(3,4);

/*const sum = function(n1,n2){
    return n1+n2;
}*/

const arrow1 = (n1,n2)=>{
    return n1+n2;
}

console.log(arrow1(3,4));

const square = n1=> n1*n1;

console.log(square(6));


const mohd = n => n*n*n*n;

console.log(mohd(2));


const what = (name1 , infor) => {
    return "this is the " +name1  + "and this give me this "+ infor+"   ";
}

console.log(what("mohammad ","comp"));

const printhellow = () => console.log("this is the print function");

printhellow();
printhellow();
printhellow();
printhellow();


const arrr = [10,20,30,40,50];

const addbouns = (mark)=>{
    if (mark+5 <= 45){
        return mark+5;
    }
    else return mark;

}

const arrr1 = arrr.map(addbouns);
console.log(arrr);
console.log(arrr1);

const arrr4 = arrr1.map((mark,index)=> (mark+5) < 45? mark+5+index:mark);
console.log(arrr4);


// const aaaa = arrr4.map()

const names = ["mohd","ahmad","ali"];

const newnames = names.map((name, index) => `${index} : ${name.length}` );
console.log(newnames);

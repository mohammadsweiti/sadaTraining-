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

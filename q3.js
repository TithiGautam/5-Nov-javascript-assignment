function Ternary(num){
    let res = (num>0)?"positive":(num<0)?"negative":"zero"
    return res;
}
let num = -20;
let res = Ternary(num);
console.log(res);
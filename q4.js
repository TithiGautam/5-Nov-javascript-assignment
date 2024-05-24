function voting(age){
    let res = (age<18)?"you cannot vote":"you can vote";
    return res;
}
let age= 20;
let res = voting(age);
console.log(res);
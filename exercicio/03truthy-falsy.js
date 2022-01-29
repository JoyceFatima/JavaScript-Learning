/* Truthy ou falsy
são aspectos dos boolean, porém com alguns bugs que podem acabar acarretando, por exemplo:*/

console.log(0 == false) //true
console.log("" == false) //true
console.log(1 == true) //true

/* 0 e "" são considerados na linguagem do computador igual a false, ou seja um verdadeiro não sendo justificado */

let minhaVar= ""; //nada ou vazio, mas considerada str
let minhaVarIndefinida; //undefined, seu tipo é undefined
let varNull = null; //null ==> nada ou vazio, seu tipo é um obejeto

console.log(typeof minhaVar);
console.log(typeof minhaVarIndefinida);
console.log(typeof varNull);

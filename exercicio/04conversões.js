/* Conversões de str pra numbers */
let numero = 123;
let string = "123";

console.log("A soma é", numero + Number(string));

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para fazer essa conversão, que é mais parecida com outras linguagens de programação


/* Conversões de numbers pra str */
const int = 432;
const text = "432";

console.log(String(int), text);

/* Conversões boolean pra str */

let usuarioConectado = false;
console.log(String(usuarioConectado));

usuarioConectado = true;
console.log(String(usuarioConectado));

let meuNome = "Error";
console.log(Number(meuNome)); 
// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, nao é numero)
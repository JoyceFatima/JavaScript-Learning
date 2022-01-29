{
  var minhaVar = "Isso é uma variavel var";
  /* var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação. */
}

{
  let minhaLet = 23;
  console.log(minhaLet);

  minhaLet = "isso agora é texto";
  console.log(minhaLet)

  minhaLet = 12312312.3;
  console.log(typeof minhaLet);

  // a varivel let permite ser modificada
}

{
  const varPi = 23;
  console.log(varPi);
  // a variavel const sempre sera uma constante 

  //varPi = 32 
  //console.log(varPi) não sera auterada 
}
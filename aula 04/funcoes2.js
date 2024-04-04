const TesteImparPar = (n) => {
    let calcteste = n % 2;

    if (calcteste == 1){
        return "Número Impar";
    } else {
        return "Número Par";
    }
}

console.log(TesteImparPar(17));
console.log(TesteImparPar(64));
console.log(TesteImparPar(1500));
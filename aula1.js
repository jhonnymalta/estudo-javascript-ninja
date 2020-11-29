function soma(a,b){
    return a + b;
}

var resultado = soma(3,7) + 5;

var nova;

function novoResultado(){
    nova = resultado;
    return  console.log(`O valor da variável agora é ${nova}`)
}
function multiplicacao(a,b,c){
    var _a = a;
    var _b = b;
    var _c = c;
    if(_a == undefined || _b == undefined || _c == undefined){
        console.log("Preencha os valores corretamente!");

    }else{
        var resultado = ((_a * _b) * _c) + 3;
        return console.log(resultado);
    }
}

multiplicacao(2,1,3);
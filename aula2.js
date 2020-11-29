var myObj = {};

var pessoa = {
    nome: "Maria",
    sobrenome: "Inácia",
    idade: 49,
    altura: 1.62,
    peso: 85,
    andando: false,
    caminhouQuantosMetros: 0
};
pessoa.fazerAniversario = function(){
     pessoa.idade++;
};
pessoa.andar= function(metros){
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}
pessoa.parar = function(){
    pessoa.andando = false;
}

pessoa.nomeCompleto = function(){
    return console.log(`Olá! meu nome é ${pessoa.nome} ${pessoa.sobrenome}`);
}
pessoa.mostrarIdade = function(){
    return console.log(`Olá! eu tenho ${pessoa.idade} anos`);
}
pessoa.mostrarPeso = function(){
    return console.log(`Eu peso ${pessoa.peso}Kg.`);
}
pessoa.mostrarAltura = function(){
    return console.log(`Minha altura é ${pessoa.altura}m.`)
}

pessoa.sexo = "Feminino";

pessoa.apresentacao = function(){
    var artigo = "a";
    let nomeCompleto = this.nome + this.sobrenome;
    var ano = "";
    var metros = "metros";
    
    if(pessoa.sexo ==="Feminino"){
        artigo = "a";
    }else{
        artigo = "o";
    }
    if(pessoa.idade === 1){
        ano = "ano";
    }else{
        ano = "anos"
    }
    if( pessoa.caminhouQuantosMetros === 1){
        metros = "metro";
    }else{
        metros = "metros";
    }
    return console.log(`Olá eu sou ${artigo} ${nomeCompleto}, tenho ${pessoa.idade} ${ano}, ${pessoa.altura} de altura, meu peso é ${pessoa.peso} e,
    só hoje, eu caminhei ${pessoa.caminhouQuantosMetros} metros.`)
}

pessoa.apresentacao();

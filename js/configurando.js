console.log("Estou funcionando - configurando.js");

var botaoConfiguracao = document.querySelector("#salvar-configuracao");

botaoConfiguracao.addEventListener("click",function(){
    event.preventDefault();
    console.log("Botão salvar funcionando");
    var config = document.querySelector("#form-config");
    var configuracao = obtendoConfig(config);
    console.log(configuracao);
})

function obtendoConfig(form){
    var tps = {
        tps1 : form.tp1.value,
        tps2 : form.tp2.value
    }
    return tps;
}


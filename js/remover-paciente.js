
var pacientes = document.querySelectorAll(".paciente");

var tabela=document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    //var alvoEvento=event.target;
    //var paiDoAlvo=alvoEvento.parentNode; TR = paciente-remover

    //paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);

})


//desta forma os novos elementos adicionados na tabela 
//não serao escutados por isso tem que trabalhar com a classe pai 
/** 
pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        console.log("fui clicado");
        this.remove();
    });
});

*/


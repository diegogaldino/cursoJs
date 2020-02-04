
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//buscou a primeira tr pelo id
//var paciente = document.querySelector("#primeiro-paciente");

var pacientes=document.querySelectorAll(".paciente");

for (var i = 0; i <pacientes.length; i++) {
	var paciente=pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc=paciente.querySelector(".info-imc");

	var pesoValido=true;
	var alturaValida=true;

	if(peso<=0||peso>=1000){
		console.log("peso invalido");
		pesoValido=false;
		tdImc.textContent="peso invalido";
		//adiciona classe ao elemento
		paciente.classList.add("paciente-invalido");
	}

	if(altura <=0 ||altura>=3.00){
		console.log("altura invalido");
		alturaValida=false;
		tdImc.textContent="altura invalido";
		//paciente.style.backgroundColor="lightcoral";
		paciente.classList.add("paciente-invalido");
	}


	if (alturaValida&&pesoValido){
		var imc = peso/(altura*altura);
		tdImc.textContent=imc.toFixed(2);//toFixed limita casas decimais
	}

}
/* Evento de click no titulo passando como parametro uma função 
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
	console.log("Clicou")
}
*/

// passando uma função anonima
 titulo.addEventListener("click", function(){
 	console.log("Clicou");
 });

var botaoAdicionar = document.querySelector("adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){

});
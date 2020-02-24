
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

	var pesoValido=validaPeso(peso);
	var alturaValida=validaAltura(altura);

	if(!pesoValido){
		console.log("peso invalido");
		pesoValido=false;
		tdImc.textContent="peso invalido";
		//adiciona classe ao elemento
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaValida){
		console.log("altura invalido");
		alturaValida=false;
		tdImc.textContent="altura invalido";
		//paciente.style.backgroundColor="lightcoral";
		paciente.classList.add("paciente-invalido");
	}


	if (alturaValida&&pesoValido){
		var imc = calculaImc(peso,altura);
		tdImc.textContent=imc;
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

 function validaPeso(peso){
    if(peso>=0 && peso<1000) {
        return true;
    }   else {
        return false;
    }
}

function validaAltura(altura){
	if(altura>=0 && altura<=3.0){
		return true;
	}else{
		return false;
	}

}


function calculaImc(peso,altura){
	var imc=0;
	imc = peso / (altura*altura);
	return imc.toFixed(2);//toFixed limita casas decimais
}
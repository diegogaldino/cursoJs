
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    //segura um evento padrao
    event.preventDefault();

    //seleciona o form
    var form = document.querySelector("#form-adiciona");

    //extrai valores dentro do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //criar tag html
    var pacienteTr = montaTr(paciente);
    //adicionando pacinete na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}

function obtemPacienteDoFormulario(form) {
    //objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    console.log(paciente);
    return paciente;
    /*
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value; 
    */
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    /*
        var nomeTd = montaTd(paciente.nome,"info-nome");
        var pesoTd = montaTd(paciente.peso,"info-peso");
        var alturaTd = montaTd(paciente.altura,"info-altura");
        var gorduraTd = montaTd(paciente.gordura,"info-gorduraTd");
        var imcTd = montaTd(paciente.imc,"info-imc");
    */
    //realiza de forma mais sucinta passando direto a função como parametro no appendChild
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gorduraTd"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}



function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) erros.push("Nome vazio");
    if (!validaPeso(paciente.peso)) erros.push("Peso invalido");
    if (!validaAltura(paciente.altura)) erros.push("Altura invalido");
    if (paciente.gordura.length == 0) erros.push("Gordura vazio");
    if (paciente.peso.length == 0) erros.push("peso vazio");
    if (paciente.altura.length == 0) erros.push("altura vazio");

    return erros;
}
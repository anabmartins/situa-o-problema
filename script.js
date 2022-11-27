// mostrar a série caso for aluno
document.body.addEventListener('change', function(e){

var serie = document.getElementById('serie')
var container = document.querySelector('#cadas')

  let target = e.target;
  switch(target.id){
    case 'aluno':
      serie.style.display = 'flex';
      container.style.maxHeight = '560px';
      break;
    case 'professor':
      serie.style.display = 'none';
      container.style.maxHeight = '510px';
      break
  }
})

// Cadastro do usuário
btnCadastro = document.getElementById('btnCadastro')
// btnCadastro.addEventListener(cadastrar(), 'click')

function cadastrar(){

    matricula = document.getElementById('matricula').value
    nome = document.getElementById('nome')
    sobrenome = document.getElementById('sobrenome')
    dataNasc = document.getElementById('data').value
    cidade = document.getElementById('cidade')
    bairro = document.getElementById('bairro')
  
  //  document.getElementById('fase1').style.display = 'none'
   
  
}




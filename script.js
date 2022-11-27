aluno = document.getElementById('aluno')
professor = document.getElementsByName('professor')
serie = document.getElementById('serie')

  // if(aluno.checked = true){
  //   serie.style.display = 'flex'
  // } else {
  //   serie.style.display = 'none'
  // }
document.body.addEventListener('change', function(e){
  let target = e.target;
  switch(target.id){
    case 'aluno':
      serie.style.display = 'flex';
      break;
    case 'professor':
      serie.style.display = 'none';
      break
  }
})

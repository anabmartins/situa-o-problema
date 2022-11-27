serie = document.getElementById('serie')
container = document.querySelector('#cadas')
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
      container.style.maxHeight = '560px';
      break;
    case 'professor':
      serie.style.display = 'none';
      container.style.maxHeight = '510px';
      break
  }
})

fetch('pessoas.json')
  .then((resposta) => resposta.json())
  .then((json) => loadElements(json));

function loadElements(json) {
  const table = document.querySelector('table');

  for (pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.email;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.estado;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.empresa;
    tr.appendChild(td);

    td = document.createElement('td');
    const sexo = pessoa.sexo;
    if (sexo !== '') {
      td.innerHTML = sexo;
    } else {
      td.innerHTML = 'vazio';
    }
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.cpf;
    tr.appendChild(td);

    table.appendChild(tr);
  }
}


// exemplo do professor
/*
const olTarefas = document.getElementById("olTarefas");
const btCarregar = document.getElementById("btCarregar");
const inputTarefa = document.getElementById("inputTarefa");
const btAdicionar = document.getElementById("btAdicionar");
const cbNaoConcluidas = document.getElementById("cbNaoConcluidas");

const tarefaURL = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "LXzh7fjlzQIIkqUCzg4zl7yfttXtgsOofUqeVpZR",
  "X-Parse-REST-API-Key": "2P5KVRTih4tegOxlzCPXbxUk1TMCKi932c4b6F6k",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

const getTarefas = async () => {
  let url = tarefaURL;
  const naoConcluidas = cbNaoConcluidas.checked;
  if (naoConcluidas) {
    const whereClause = JSON.stringify({ concluida: false });
    url = `${url}?where=${whereClause}`;
    url = encodeURI(url);
    console.log("url", url);
  }
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const data = await response.json();
  return data.results;
};

const listarTarefas = async () => {
  const listaTarefas = await getTarefas();
  listaTarefas.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  olTarefas.innerHTML = "";
  for (let i = 0; i < listaTarefas.length; ++i) {
    const tarefa = listaTarefas[i];
    const li = document.createElement("li");
    const text = document.createTextNode(`${tarefa.descricao} - concluída: `);
    const cb = document.createElement("input");
    cb.name = tarefa.objectId;
    cb.type = "checkbox";
    cb.checked = tarefa.concluida;
    cb.onchange = () => handleChangeCBTarefa(cb, tarefa);
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.onclick = () => handleClickBtRemover(button, tarefa);
    li.appendChild(text);
    li.appendChild(cb);
    li.appendChild(button);
    olTarefas.appendChild(li);
  }
};

const handleChangeCBTarefa = async (cb, tarefa) => {
  cb.disabled = true;
  await fetch(`${tarefaURL}/${tarefa.objectId}`, {
    method: "PUT",
    headers: headersJson,
    body: JSON.stringify({ concluida: !tarefa.concluida }),
  });
  cb.disabled = false;
  listarTarefas();
};

const handleClickBtRemover = async (button, tarefa) => {
  button.disabled = true;
  await fetch(`${tarefaURL}/${tarefa.objectId}`, {
    method: "DELETE",
    headers: headers,
  });
  button.disabled = false;
  listarTarefas();
};

const adicionarTarefa = async () => {
  const descricao = inputTarefa.value;
  if (!descricao) {
    alert("Precisa digitar uma tarefa!");
    return;
  }
  btAdicionar.disabled = true;
  const response = await fetch(tarefaURL, {
    method: "POST",
    headers: headersJson,
    body: JSON.stringify({ descricao }),
  });
  btAdicionar.disabled = false;
  inputTarefa.value = "";
  inputTarefa.focus();
};

btCarregar.onclick = listarTarefas;
btAdicionar.onclick = adicionarTarefa;
cbNaoConcluidas.onchange = listarTarefas; */

document.getElementById("SalvarOS").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const formData = new FormData(event.target);

    // como monto cada coisa dessa
    // nao consigo entender a logica
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    
    fetch('URL', { // onde vejo isso ?
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados para o servidor.');
        }
        return response.json();
    })
    .then(responseData => {
        // Seu código para lidar com a resposta do servidor, se necessário
        console.log('Dados enviados com sucesso:', responseData);
    })
    .catch(error => {
        // Tratamento de erros
        console.error('Erro:', error);
    });
});
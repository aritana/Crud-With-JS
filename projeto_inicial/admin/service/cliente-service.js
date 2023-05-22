const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível listar os clientes')
  });
}; //retorna promisse.

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    return resposta.body;
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then(resposta => {
      if(!resposta.ok){
        throw new Error('Não foi possível deletar o cliente')
      }
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    return resposta.json();
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    return resposta.json();
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};

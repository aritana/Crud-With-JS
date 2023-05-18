const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
}; //retorna promisse.

export const clienteService = { listaClientes };

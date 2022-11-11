const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const deleteClient = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",

  })
}

export const clientServices = {
  listaClientes,
  crearCliente,
  deleteClient,
};

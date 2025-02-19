import { clientServices } from "../service/client-service.js";


const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .deleteClient(id)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => alert("Ocurrio un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
    /* console.log(data); */
  })
  .catch((e) => alert("Ocurrio un error..."));

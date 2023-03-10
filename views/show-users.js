import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

export class ShowUsers extends navigator(LitElement) {
  static get properties() {
    return {
      users: { type: Object },
      conf: { type: Object },
      data: { type: Object },
      allUsers: { type: Object },
    };
  }
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: white;
      }
      .tableContainer {
        display: flex;
        flex-direction: column;
        width: 70vw;
        font-size: 2em;
      }
      .row {
        display: grid;
        grid-template-columns: 23% 23% 23% 10% 10%;
        justify-content: space-around;
        border-bottom: solid 1px gray;
      }
      .action {
        cursor: pointer;
        color: green;
      }
      .new {
        align-self: flex-end;
        margin-right: 20em;
        font-size: 1em;
      }
      .muestraU {
        font-size: 2em;
        background-color: black;
        color: white;
        border: solid white 2px;
        border-radius: 25px;
        padding: 2em;
        cursor: pointer;
        margin-top: 2em;
      }
    `,
  ];

 

  

  render() {
    return html`
     
         <h1>Usuarios</h1>
            <button class="new" @click="${() => this.navigate("/info")}">
              Agregar usuario
            </button>
           
            <table class="tableContainer">
              <tr class="row">
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>------</th>
                <th>------</th>
              </tr>

              ${this.allUsers.map(
                (element) =>
                  html`
                    <tr class="row">
                      <td>${element.name}</td>
                      <td>${element.lastName}</td>
                      <td>${element.secondLastName}</td>
                      <td
                        @click="${() => this.navigateTo(element, "/edit")}"
                        class="action"
                      >
                        Edit
                      </td>
                      <td
                        @click="${() => this.deleteData(element)}"
                        class="action"
                      >
                        Delete
                      </td>
                    </tr>
                  `
              )}
            </table>
            
    `;
  }

  navigateTo(element, path) {
    this.dispatchEvent(
      new CustomEvent("user", {
        detail: { element },
        bubbles: true,
        composed: true,
      })
    );
    this.navigate(path);
  }

  deleteData(element) {
    if (confirm("Confirma que borrar?? al usuario")) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: null,
      };

      let url =
        "https://638f55eb4ddca317d7f57d22.mockapi.io/users/" + element.id;

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {this.sendTo(data)});
    }
  }

  sendTo(user){
    this.numberThatChanges=3
    this.dispatchEvent(
        new CustomEvent("bringDataAgain", {
          detail: { number: this.numberThatChanges },
          bubbles: true,
          composed: true,
        })
  )}
}
customElements.define("show-users", ShowUsers);

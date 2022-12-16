import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "../node_modules/@doubletrade/lit-datatable";

export class ShowUsers extends navigator(LitElement) {
  static get properties() {
    return {
      users: { type: Object },
      conf: { type: Object },
      data: { type: Object },
      storage: { type: Object },
    };
  }
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .tableContainer {
        display: flex;
        flex-direction: column;
        width: 70vw;
        font-size: 2em;
      }
      .row {
        display: flex;
        justify-content: space-around;
        border-bottom: solid 1px gray;
      }
      .action {
        cursor: pointer;
        color: green;
      }
    `,
  ];

  constructor() {
    super();
    this.users = [];
    this.getdata();
    this.storage = window.localStorage;
  }
  firstUpdated() {
    super.firstUpdated();
    this.users;
  }

  render() {
    return html`
      <h1>Users</h1>

      <table class="tableContainer">
        <tr class="row">
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>------</th>
          <th>------</th>
        </tr>

        ${this.users.map(
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
                <td class="action">Delete</td>
              </tr>
            `
        )}
      </table>
    `;
  }

  navigateTo(element, path) {
    localStorage.clear();
    localStorage.setItem("user", element.id);
    console.log(localStorage.getItem('user'), "en show")
    

    this.navigate(path);
  }
  getdata() {
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => (this.users = data));
  }
}
customElements.define("show-users", ShowUsers);

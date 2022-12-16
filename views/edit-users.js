import { LitElement, html, css } from "lit";

export class EditUsers extends LitElement {
  static get properties() {
    return {
      user: { type: Number },
    };
  }
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.user = localStorage.getItem("user");
  }

  connectedCallback() {
    super.connectedCallback();
    this.user = JSON.stringify(localStorage.getItem("user"));
    console.log(this.user, "en callback");
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <h1>user</h1>
        <button @click="${this.setUser}">Do you want to edit this user?</button>
        <div>
          <input id="nombre" placeholder=${this.user.name} />
          <input id="primerApellido" placeholder=${this.user.lastName} />
          <input id="segundoApellido" placeholder=${this.user.secondLastName}
                />

          <button @click="${this.sendHerbs}">ACTUALIZAR</button>
        </div>
        <p></p>
      </div>
    `;
  }

  setUser() {
    this.user = localStorage.getItem("user");
    console.log(this.user, "después de botón");
  }
}
customElements.define("edit-users", EditUsers);

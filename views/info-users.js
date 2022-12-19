import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
export class InfoUsers extends navigator(LitElement) {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: gray;
      }
      .infoContainer {
        display: flex;
        flex-direction: column;
        font-size: 2em;
        margin-left: 4em;
        height: 50vh;
        align-items: space-around;
        justify-items: space-around;
      }
      .entries {
        width: 10em;
        font-size: 1em;
      }
      .act {
        width: 7em;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <h1>Registrar usuario</h1>

        <div class="infoContainer">
          <label>Nombre:</label>
          <input class="entries" id="nombre" placeholder="Nombre" />
          <label>Apellido Paterno:</label>
          <input
            class="entries"
            id="primerApellido"
            placeholder="Apellido Paterno"
          />
          <label>Apellido Materno:</label>
          <input
            class="entries"
            id="segundoApellido"
            placeholder="Apellido Materno"
          />

          <button class="act" @click="${this.userAct}">registrar</button>
        </div>
        <p></p>
      </div>
    `;
  }
  userAct() {
    this.name = this.shadowRoot.getElementById("nombre").value;
    this.lastName = this.shadowRoot.getElementById("primerApellido").value;
    this.secondLastName =
      this.shadowRoot.getElementById("segundoApellido").value;

    this.actualUser = {
      name: this.name,
      lastName: this.lastName,
      secondLastName: this.secondLastName,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.actualUser),
    };
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users/", requestOptions)
      .then((response) => response.json())
      .then((data) => this.sendTo(data));
    this.navigate("/");
  }
  sendTo(user){
    this.dispatchEvent(
      new CustomEvent("newUser", {
        detail: { user },
        bubbles: true,
        composed: true,
      })
    );
  }

}
customElements.define("info-users", InfoUsers);

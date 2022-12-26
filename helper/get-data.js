import { LitElement, html, css } from "lit";

export class GetData extends LitElement {
  constructor() {
    super();
    this.getdata();
  }

  getdata() {
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        this.sendData(data);
      });
    console.log("fui llamada");
  }

  sendData(users) {
    this.dispatchEvent(
      new CustomEvent("usersData", {
        detail: { users },
        bubbles: true,
        composed: true,
      })
    );
  }

 
}
customElements.define("get-data", GetData);

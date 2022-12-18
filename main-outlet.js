import { LitElement, html, css } from "lit";
import { outlet } from "lit-element-router";
import "./views/info-users";
import "./views/show-users";
import "./views/edit-users";

export class MainOutlet extends outlet(LitElement) {
  static get properties() {
    return {
      name: { type: String },
      user: { type: Object },
    };
  }

  constructor() {
    super();

   
    this.addEventListener("user", (e) => {
      this.selectedItem = e.detail;

      this.toGrandpa(this.selectedItem);
    });
    console.log(this.user, "en constructor outler")
  }
  toGrandpa(user) {
    this.dispatchEvent(
      new CustomEvent("user", {
        detail: { user },
        bubbles: true,
        composed: true,
      })
    );
  }

 

  render() {
    return html`
      <slot >
      </slot>
    `;
  }
}
customElements.define("main-outlet", MainOutlet);

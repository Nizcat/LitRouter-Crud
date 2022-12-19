import { LitElement, html, css } from "lit";
import { outlet } from "lit-element-router";
import "./views/info-users";
import "./views/show-users";
import "./views/edit-users";

export class MainOutlet extends outlet(LitElement) {
  
  render() {
    return html`
      <slot >
      </slot>
    `;
  }
}
customElements.define("main-outlet", MainOutlet);

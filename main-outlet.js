import { LitElement, html, css } from "lit";
import { outlet } from "lit-element-router";
import "./views/info-users";
import "./views/show-users";
import "./views/edit-users";



export class MainOutlet extends outlet(LitElement) {
   static get properties() {
    return {
      name: { type: String },
    };
  }

constructor(){
  super();
  console.log(this.name, "en outlet");
this.name="kai2"
} 
 render() {
    return html` <slot  > ${console.log(this.name)}

    </slot> `;
  }
}

customElements.define("main-outlet", MainOutlet);

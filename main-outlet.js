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
this.addEventListener("user", (e) => {
  this.selectedItem = e.detail;
  console.log(this.selectedItem, "para arriba en papa");
  this.toGrandpa(this.selectedItem)
});
} 
toGrandpa(user){
  console.log(user, "tograndpa");
  this.dispatchEvent(
    new CustomEvent("user", {
      detail: { user},
      bubbles: true,
      composed: true,
    })
  );
}
 render() {
    return html` <slot  >

    </slot> `;
  }

}

customElements.define("main-outlet", MainOutlet);

import { LitElement, html, css } from "lit";

export class EditUsers extends LitElement {
    static get properties() {
        return {
            storage: { type: Object },
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
    this.user = {};
    
  }
  
  connectedCallback() {
    super.connectedCallback();
   this.user= localStorage.getItem('user');
  }

  render() {
    return html`
      <div>
        <h1>user</h1>${console.log(this.user)}
        <p></p>
      </div>
    `;
  }
}
customElements.define("edit-users", EditUsers);

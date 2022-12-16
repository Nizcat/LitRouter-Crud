import { LitElement, html, css } from "lit";
import { router } from "lit-element-router";
import "./main-outlet";
import "./views/show-users";
import "./views/info-users";

export class MainRouter extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "users",
        pattern: "",
      },
      {
        name: "info",
        pattern: "info",
       
      },
      {
        name: "edit",
        pattern: "edit",
      
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};

    this.addEventListener("user", (e) => {
      console.log(e.detail.data, "en listener");
     
      this.requestUpdate();
    });

  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data, "router");
  }

  render() {
    return html`
      <main-outlet active-route=${this.route}>
        <show-users  route="users" ></show-users>
        <info-users route="info"></info-users>
        <edit-users  route="edit"></edit-users>

      </main-outlet>
    `;
  }



}
customElements.define("main-router", MainRouter);

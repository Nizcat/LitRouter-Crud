import { LitElement, html, css } from "lit";
import { router } from "lit-element-router";

import "./main-outlet";
import "./helper/get-data";
import "./views/show-users";
import "./views/info-users";
import "./views/edit-users";


export class MainRouter extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      allUsers: { type: Object },
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
      this.user = e.detail.element;
     
    });
    this.addEventListener("usersData", (e) => {
      this.allUsers = e.detail.users;
      
    });
    this.addEventListener("bringDataAgain", (e) => {
      this.sum =e.detail.number;
      this.requestUpdate();
    });
  }
 
   

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <main-outlet active-route=${this.route}>
        <show-users .allUsers=${this.allUsers} route="users"></show-users>
        <info-users route="info"></info-users>
        <edit-users .user=${this.user} route="edit"></edit-users>
        <get-data repeat=${this.sum}></get-data>
      </main-outlet>
    `;
  }
}
customElements.define("main-router", MainRouter);

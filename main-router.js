import { LitElement, html, css } from "lit";
import { router } from "lit-element-router";

import "./main-outlet";
import "./helper/get-data";
import "./views/show-users";
import "./views/info-users";
import "./views/edit-users";
import "./views/update-data";

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
      console.log("editando listener");
    });
    this.addEventListener("usersData", (e) => {
      this.allUsers = e.detail.users;
      console.log(this.allUsers, "en listener ");
    });
    this.addEventListener("userChanged", (e) => {
      this.sum =1;
      console.log(this.sum,"listener router user");
      this.requestUpdate();
      
    });

    window.addEventListener("recibo", (e) => {
      this.allUsers = e.detail.users;
      this.shouldUpdate();
     
    });

    this.addEventListener("deletedU", (e) => {
      this.sum =3;
      console.log(this.sum,"listener router user");
      this.requestUpdate();
    });
    this.addEventListener("newUser", (e) => {
      this.sum =2;
      console.log(this.sum,"listener router user");
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

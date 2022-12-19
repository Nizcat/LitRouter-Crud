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
    this.addEventListener("userChanged", (e) => {
      this.userChanged = e.detail.user;
      this.newarr3=[]
      for (let user of this.allUsers) {
        if (user.id != this.userChanged.id) {
          this.newarr3.push(user)
        }
      }
      this.newarr3.push(this.userChanged)
      this.allUsers = this.newarr3;
      this.requestUpdate();
    });
    this.addEventListener("deletedU", (e) => {
      this.deleted = e.detail.user;
      this.newarr=[]
      for (let user of this.allUsers) {
        if (user.id != this.deleted.id) {
          this.newarr.push(user)
        }
      }
      this.allUsers = this.newarr;
      this.requestUpdate();
    });
    this.addEventListener("newUser", (e) => {
      this.newUser1=e.detail.user
      this.newarr2=[]
      this.newarr2.push(this.newUser1)
      for (let user of this.allUsers) {
        this.newarr2.push(user)
      }
      this.allUsers = this.newarr2;
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
        <show-users .allusers=${this.allUsers} route="users"></show-users>
        <info-users route="info"></info-users>
        <edit-users .user=${this.user} route="edit"></edit-users>
      </main-outlet>
      <get-data></get-data>
    `;
  }
}
customElements.define("main-router", MainRouter);

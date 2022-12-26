import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import { GetData } from "../helper/get-data";
import "./update-data"
export class EditUsers extends navigator(LitElement) {
  static get properties() {
    return {
      user: { type: Object },
    };
  }
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: gray;
      }
      .infoContainer {
        display: flex;
        flex-direction: column;
        font-size: 2em;
        margin-left:4em;
        height:50vh;
        align-items:space-around;
        justify-items:space-around;
        
      }
      .entries {
        width:10em;
        font-size:1em;
      }
      .act{
        
        width:7em;
      }
    `,
  ];

  constructor() {
    super();
    
    this.per = new GetData();
    window.addEventListener("recibo", (e) => {
     console.log(e.detail.users, "en edit desde updata");
      
    });
    this.principal = document.getElementById("principal");
   
    
  }

 
  render() {
    return html`
      <div id="principal">
        <h1>Editar usuario</h1>
        
        <div class="infoContainer">
       
          <label>Nombre:</label>
          <input class="entries" id="nombre" value=${this.user.name} />
          <label>Apellido Paterno:</label>
          <input class="entries" id="primerApellido" value=${this.user.lastName} />
          <label>Apellido Materno:</label>
          <input class="entries" id="segundoApellido" value=${this.user.secondLastName} />

          <button class="act" @click="${this.userAct}">ACTUALIZAR</button>
        </div>
        <p></p>
      </div>
    `;
  }


  userAct() {
    this.name = this.shadowRoot.getElementById("nombre").value;
    this.lastName = this.shadowRoot.getElementById("primerApellido").value;
    this.secondLastName = this.shadowRoot.getElementById("segundoApellido").value;
   

    this.actualUser = {
      "name": this.name,
      "lastName": this.lastName,
      "secondLastName": this.secondLastName,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.actualUser),
    };
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users/"+this.user.id, requestOptions)
      .then((response) => response.json())
      .then((data) =>{ console.log(data);  this.navigate("/");
      this.bringdata = document.createElement('update-data');
      this.principal = document.getElementById("principal");
      this.principal.append(this.bringdata)
  });
      
      
    
   
   
        
  }
  
  sendnewUser(user){
    console.log(user, "antes de mandar");
    this.dispatchEvent(
        new CustomEvent("userChanged", {
          detail: { user },
          bubbles: true,
          composed: true,
        })
  )}
}


customElements.define("edit-users", EditUsers);

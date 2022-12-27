import { LitElement, html, css } from 'lit';

export class UpdateData extends LitElement {

    constructor(){
        super();
        this.updateUserData()
    }
    updateUserData() {
    
        fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users")
          .then((response) => response.json())
          .then((data) => {
            this.sendUData(data);
          });
        console.log("update");
      }
    
      sendUData(users) {
      
        console.log( "empieza SendUdATA");
    
        this.dispatchEvent(
          new CustomEvent("recibo", {
            detail: { users },
            bubbles: true,
            composed: true,
          })
        );
      }
}
customElements.define('update-data', UpdateData);

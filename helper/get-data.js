import { LitElement} from 'lit';

export class GetData extends LitElement {
  static get properties() {
    return {
        repeat: { type: Number },
    };
}
constructor() {
super();
this.getdata();
this.numberR=0
this.repeatGetData()

}
update(){
super.update();
this.repeat;
if(this.repeat!= undefined){
    
    if(this.numberR < this.repeat){
        this.getdata()
    }
}

}

getdata() {
fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users")
  .then((response) => response.json())
  .then((data) => this.sendData(data));

}

sendData(users) {

this.dispatchEvent(
  new CustomEvent("usersData", {
    detail: { users },
    bubbles: true,
    composed: true,
  })
);
}
repeatGetData(sum){
if(this.repeat!= undefined){

if(this.numberR < sum){
    this.getdata()
}
}
this.requestUpdate();
}

}
customElements.define("get-data", GetData);

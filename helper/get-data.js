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
console.log(this.repeat);
}
update(){
super.update();
this.repeat;
if(this.repeat!= undefined){
    console.log(this.repeat,"llama repeat",this.numberR < this.repeat);
    if(this.numberR < this.repeat){
        this.getdata()
    }
}

}

getdata() {
fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/users")
  .then((response) => response.json())
  .then((data) => this.sendData(data));
console.log("llaman a getdata");
}

sendData(users) {
console.log("llaman a dispatch");
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
console.log(sum,"llama repeat",this.numberR < sum);
if(this.numberR < sum){
    this.getdata()
}
}
this.requestUpdate();
}

}
customElements.define('get-data', GetData);

import { LitElement, html, css } from "lit";

export class RenoRegalos extends LitElement {
  constructor() {
    super();
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
      { l: 4, w: 4, h: 4 },
    ];

    this.exercise();
  }
  exercise() {
    const boxes = [
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
      { l: 1, w: 1, h: 1 },
      { l: 4, w: 2, h: 4 },
    ];

    const wrapped = this.fitsInOneBox(boxes);

    console.log(wrapped, "result");
  }

  fitsInOneBox(boxes) {
    let i = boxes.length - 1;
    let y = 0;
    let results = [];
let result=true;
    let double = [];
    let sorted = boxes.sort((a,b)=>a.l-b.l);
    for (let box of sorted) {
      let arr = Object.values(box);
      double.push(arr);
    }
        do {
      y=i-1;
     results.push(double[i][2] > double[y][2] && double[i][1] > double[y][1] && double[i][0] > double[y][0])
      i--;
    } while (i > 0);
if(results.includes(false)){
 return  result =false;
}
    return result;
  }



  

  distributeGifts(packOfGifts, reindeers) {
    let capacidadDeCarga = 0;
    let pesoCaja = 0;
    reindeers.forEach((element) => {
      capacidadDeCarga += element.length;
    });
    packOfGifts.forEach((element) => {
      pesoCaja += element.length;
    });
    let capacidadCarga = capacidadDeCarga * 2;
    console.log(capacidadCarga, pesoCaja);

    let numCajas = Math.floor(capacidadCarga / pesoCaja);
    return numCajas;
  }
}

customElements.define("reno-regalos", RenoRegalos);

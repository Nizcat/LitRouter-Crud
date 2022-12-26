import { LitElement, html, css } from "lit";

export class RenosCiudades extends LitElement {
  constructor() {
    super();
    this.giftsCities = [12, 3, 11, 5, 7];
    this.maxGifts = 20;
    this.maxCities = 3;
    this.exercise();
  }
  exercise() {
    const giftsCities = [12, 3, 11, 5, 7];
    const maxGifts = 20;
    const maxCities = 3;

    const wrapped = this.getMaxGifts(giftsCities, maxGifts, maxCities);

    console.log(wrapped, "result");
  }

  getMaxGifts(giftsCities, maxGifts, maxCities) {
    const gifts = [];
    let sorted = giftsCities.sort((a, b) => b - a);
    sorted.map((city) => {
      if (maxGifts > city) {
        gifts.push(city);
      }
    });
    

    for (let i = 0; i < giftsCities.length - 2; i++) {
      for (let j = i + 1; j < giftsCities.length - 1; j++) {
        for (let k = j + 1; k < giftsCities.length; k++) {
          if (gifts[i] + gifts[j] + gifts[k] == maxGifts) {
            console.log(
              "Triplet is " + gifts[i] + ", " + gifts[j] + ", " + gifts[k]
            );
          }
        }
      }
    }

    

    return 0;
  }
}
customElements.define("renos-ciudades", RenosCiudades);

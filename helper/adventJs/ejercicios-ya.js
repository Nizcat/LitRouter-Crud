import { LitElement, html, css } from "lit";

export class EjerciciosYa extends LitElement {
  constructor() {
    super();
    this.exercise();
  }

  exercise() {
    const gifts = ["cat", "game", "socks"];

    const wrapped = this.wrapping(gifts);

    console.log(wrapped);
  }
  wrapping(gifts) {
    const wrappedGifts = [];
    gifts.forEach((element) => {
      let asterNumber = element.length + 2;
      let asteriscos = "*".repeat(asterNumber);

      let wrappedWord = asteriscos + element + asteriscos;
      console.log(wrappedWord);
      wrappedGifts.push(wrappedWord)

      
    });
    return wrappedGifts;
  }
  addbefore(word) {
    let before = "*" + word;
    return before;
  }
}
customElements.define("ejercicios-ya", EjerciciosYa);

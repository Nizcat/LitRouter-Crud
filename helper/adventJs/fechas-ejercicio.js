import { LitElement, html, css } from "lit";

export class FechasEjercicio extends LitElement {
  constructor() {
    super();

    this.exercise();
  }
  exercise() {
    const year = 1985;
    const holidays = [
      "01/01",
      "01/06",
      "02/02",
      "02/17",
      "02/28",
      "06/03",
      "12/06",
      "12/25",
    ];

    const wrapped = this.countHours(year, holidays);

    console.log(wrapped);
  }

  countHours(year, holidays) {
    let hours = 0;
    holidays.forEach((element) => {
      let day = new Date(element + "/" + year).getDay();

      if (day >= 1 && day <= 5) {
       

        hours += 2;
      }
    });

    return hours;
  }
}
customElements.define("fechas-ejercicio", FechasEjercicio);

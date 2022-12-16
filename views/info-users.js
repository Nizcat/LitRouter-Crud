import { LitElement, html, css } from 'lit';

export class InfoUsers extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>Estoy en info users</h1>
        `;
    }
}
customElements.define('info-users', InfoUsers);

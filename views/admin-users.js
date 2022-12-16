import { LitElement, html, css } from 'lit';

export class AdminUsers extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('admin-users', AdminUsers);

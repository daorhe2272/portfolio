import { LitElement, html, css } from "lit-element";

export class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 70px;
        background-color: Navy;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        font-family: "Open Sans", sans-serif;
      }
    `;
  }

  render() {
    return html`
      <div class="container">&#169; David Orozco 2021</div>
    `;
  }
}

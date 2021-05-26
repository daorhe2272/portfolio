import { LitElement, html, css } from "lit-element";

export class Separator extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .h-bar {
        width: 60%;
        height: 1px;
        background-color: black;
        margin: 15px 0;
      }
    `;
  }

  render() {
    return html`
      <div class="h-bar"></div>
    `;
  }
}

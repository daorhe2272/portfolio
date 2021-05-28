import { LitElement, html, css } from "lit-element";

export class PopUp extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        z-index: 10;
        display: none;
        justify-content: center;
        align-items: center;
      }

      .m-box {
        background-color: white;
        min-height: 180px;
        min-width: 200px;
        max-width: 500px;
        width: 100%;
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 15px;
      }

      .title {
        font-weight: bold;
        color: Navy;
        font-size: 1.2rem;
        font-family: "Open Sans";
      }

      .message {
        font-family: "Roboto";
        font-size: 1.1rem;
      }

      .c-button {
        background-color: red;
        min-width: 100px;
        text-align: center;
        color: white;
        border-radius: 5px;
        padding: 5px 0;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <div class="m-box">
        <div class="title">Title goes here</div>
        <div class="message">This is the message to be transmitted to the user. It should be clear and succint.</div>
        <div class="c-button" @click="${this.hidePopUp}">Close</div>
      </div>
    `;
  }

  hidePopUp() {
    this.style.display = "none";
  }
}

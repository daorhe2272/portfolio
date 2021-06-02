import { LitElement, html, css } from "lit-element";

export class Contact extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        color: Navy;
        font-family: "Open Sans", sans-serif;
        margin: 10px 0;
      }

      .container {
        max-width: 800px;
        padding: 15px;
      }

      .text{
        font-size: 1.2rem;
      }

      .icons {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 2.8rem;
        color: Navy;
        margin: 12px 0;
      }

      i {
        margin: 0 8px;
        cursor: pointer;
        padding: 5px;
      }
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
      <div class="title">Contact</div>
      <div class="container">
        <div class="text">Do you have any project you would like to discuss? Are you looking for a new member for your team? Is there anything else you would like to know? You can reach me through any of the channels below.</div>
        <div class="icons">
          <i class="fas fa-envelope"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-xing-square"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    `;
  }
}

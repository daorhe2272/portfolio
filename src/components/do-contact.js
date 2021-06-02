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

      a {
        margin: 0 8px;
        cursor: pointer;
        padding: 5px;
        text-decoration: none;
        color: Navy;
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
          <a class="fas fa-envelope" href="mailto:daorhe2272@hotmail.com" title="Email: daorhe2272@hotmail.com"></a>
          <a class="fab fa-linkedin" href="https://www.linkedin.com/in/david-orozco-100332162/" target="_blank" title="Link to my LinkedIn account"></a>
          <a class="fab fa-xing-square" href="https://www.xing.com/profile/David_Orozco4" target="_blank" title="Link to my Xing account"></a>
          <a class="fab fa-github" href="https://github.com/daorhe2272" target="_blank" title="Link to my GitHub account"></a>
        </div>
      </div>
    `;
  }
}

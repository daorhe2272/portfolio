import { LitElement, html, css } from "lit-element";

export class Projects extends LitElement {
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
        font-family: "Open Sans";
        margin: 10px 0;
      }

      .p-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 15px;
      }

      .p-item {
        margin: 15px 15px;
        display: flex;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        flex-wrap: wrap;
      }

      .i-contents {
        display: flex;
        flex-direction: column;
        max-width: 550px;
      }

      .i-description {
        background-color: grey;
        display: none;
      }

      img {
        max-width: 100%;
        display: flex;
      }

      .p-t-title {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: Navy;
        margin-top: 8px;
      }

      .p-buttons {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 8px 0;
        flex-wrap: wrap;
      }

      .p-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid Navy;
        padding: 5px 8px;
        font-size: 1.1rem;
        font-family: "Open Sans";
        font-weight: bold;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        color: Navy;
        text-decoration: none;
      }

      .p-button:hover {
        background-color: Navy;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="title">Projects</div>
      <div class="p-container">
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/lists.PNG">
            <div class="p-t-title">Awesome Lists</div>
            <div class="p-buttons">
              <a class="p-button" href="https://github.com/daorhe2272/lists" target="_blank">GitHub</a>
              <a class="p-button" @click="${() => {this.showMessage("Website Not Available", "This application has not been currently deployed and, therefore, is not available online.")}}">Website*</a>
              <a class="p-button" @click="${() => {this.showDescription('Awesome Lists')}}">Description</a>
            </div>
          </div>
          <div class="i-description">
            <div class="d-idea">Idea</div>
          </div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/extra.webp">
            <div class="p-t-title">Distribuidora Extra</div>
            <div class="p-buttons">
              <a class="p-button" @click="${() => {this.showMessage("Private Repository", "This is a private repository. Please refer to the <a href='' style='color: blue; text-decoration: none;'>Contact</a> section of my portfolio to contact me and request access.")}}">GitHub*</a>
              <a class="p-button" href="https://www.distribuidoraextracali.com" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription('Distribuidora Extra')}}">Description</a>
            </div>
          </div>
          <div class="i-description"></div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/ihub.PNG">
            <div class="p-t-title">idea-hub.net</div>
            <div class="p-buttons">
              <a class="p-button" @click="${() => {this.showMessage("Private Repository", "This is a private repository. Please refer to the <a href='' style='color: blue; text-decoration: none;'>Contact</a> section of my portfolio to contact me and request access.")}}">GitHub*</a>
              <a class="p-button" href="https://www.idea-hub.net" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription('idea-hub.net')}}">Description</a>
            </div>
          </div>
          <div class="i-description"></div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/portfolio.PNG">
            <div class="p-t-title">David's Portfolio</div>
            <div class="p-buttons">
              <a class="p-button" href="https://github.com/daorhe2272/portfolio" target="_blank">GitHub</a>
              <a class="p-button" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription("David's Portfolio")}}">Description</a>
            </div>
          </div>
          <div class="i-description"></div>
        </div>
      </div>
    `;
  }

  showMessage(title, text) {
    let el = document.getElementById("root").shadowRoot.querySelector("do-popup");
    let titleDiv = el.shadowRoot.querySelector(".title");
    let textDiv = el.shadowRoot.querySelector(".message");
    el.style.display = "flex";
    titleDiv.innerHTML = title;
    textDiv.innerHTML = text;
  }

  showDescription(id) {
    let el = this.shadowRoot.querySelectorAll(".p-item");
    for (let i = 0; i < el.length; i++) {
      let title = el[i].querySelector(".p-t-title").innerHTML;
      let description = el[i].querySelector(".i-description");
      let content = el[i].querySelector(".i-contents");
      if (title === id && description.style.display === "flex") {
        description.style.display = "none";
      } else if (title === id) {
        description.style.display = "flex";
        description.style.width = content.offsetWidth + 30 + "px";
      }
    }
  }
}

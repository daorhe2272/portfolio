import { LitElement, html, css } from "lit-element";

export class Header extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        background-image: linear-gradient(to right, Navy, Aqua);
        height: 52px;
        color: white;
        display: flex;
        font-family: "Open Sans", "Roboto", sans-serif;
      }

      @media only screen and (min-width: 601px) {
        .header-horizontal {
          width: 100%;
          display: flex;
        }

        .header-vertical {
          display: none;
        }

        .header-vertical .header-item {
          display: none;
        }

        .header-horizontal .header-item {
          font-size: 1.3rem;
          display: flex;
          cursor:  pointer;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          border-radius: 5px;
          margin: 5px;
        }

        .header-item:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .fa-bars {
          display: none;
        }
      }

      @media only screen and (max-width: 600px) {
        .header-horizontal {
          display: none;
        }

        .fa-bars {
          color: white;
          margin: 7px;
          display: flex;
          align-items: center;
          padding: 0 8px;
          border-radius: 5px;
          font-size: 1.3rem;
          cursor: pointer;
        }

        .fa-bars:hover {
          background-color: rgba(255, 255, 255, 0.95);
          color: Navy;
        }

        .header-vertical {
          position: absolute;
          background-image: linear-gradient(to right, Navy, Aqua);
          width: 100%;
          display: none;
          flex-direction: column;
          top: 52px;
          z-index: 9;
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .header-vertical .header-item {
          font-size: 1.3rem;
          padding: 5px 8px;
          margin: 5px;
          cursor: pointer;
          border-radius: 5px;
        }

        .header-vertical .header-item:hover{
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    `;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
      <div class="header-horizontal">
        <div class="header-item" @click="${() => {this.scrollToElem("intro")}}">Intro</div>
        <div class="header-item" @click="${() => {this.scrollToElem("skills")}}">Skills</div>
        <div class="header-item" @click="${() => {this.scrollToElem("projects")}}">Projects</div>
        <div class="header-item">Timeline</div>
        <div class="header-item">Contact</div>
        <div class="header-item" @click="${this.goToUrl}">CV</div>
      </div>
      <div class="header-vertical">
        <div class="header-item">Intro</div>
        <div class="header-item">Skills</div>
        <div class="header-item">Projects</div>
        <div class="header-item">Timeline</div>
        <div class="header-item">Contact</div>
        <div class="header-item">CV</div>
      </div>
      <i class="fas fa-bars" alt="Menu for mobile view" @click="${this.showVerticalMenu}"></i>
    `;
  }

  showVerticalMenu() {
    let el = this.shadowRoot.querySelector(".header-vertical");
    if (el.style.display == "flex") {
      el.style.display = "none";
      el.style.maxHeight = "0px";
    } else {
      el.style.display = "flex";
      el.style.maxHeight = el.scrollHeight + "px";
    }
  }

  scrollToElem(id) {
    let el = document.getElementById("root").shadowRoot.querySelector("#" + id);
    el.scrollIntoView();
  }

  goToUrl() {
    window.location.href='/src/assets/CV.pdf';
  }
}

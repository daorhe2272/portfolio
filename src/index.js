import { LitElement, html, css } from 'lit-element';

import { PopUp } from "./components/do-popup.js";
import { Header } from "./components/do-header.js";
import { Intro } from "./components/do-intro.js";
import { Welcome } from "./components/do-welcome.js";
import { Separator } from "./components/do-separator.js";
import { Skills } from "./components/do-skills.js";
import { Projects } from "./components/do-projects.js";
import { Contact } from "./components/do-contact.js";
import { Footer } from "./components/do-footer.js";

export class Portfolio extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
      }
    `;
  }

  render() {
    return html`
      <do-popup></do-popup>
      <do-header></do-header>
      <do-intro></do-intro>
      <do-welcome id="intro"></do-welcome>
      <do-separator></do-separator>
      <do-skills id="skills"></do-skills>
      <do-separator></do-separator>
      <do-projects id="projects"></do-projects>
      <do-separator></do-separator>
      <do-contact id="contact"></do-contact>
      <do-footer></do-footer>
    `;
  }
}

customElements.define("do-popup", PopUp);
customElements.define("do-header", Header);
customElements.define("do-intro", Intro);
customElements.define("do-welcome", Welcome);
customElements.define("do-separator", Separator);
customElements.define("do-skills", Skills);
customElements.define("do-projects", Projects);
customElements.define("do-contact", Contact);
customElements.define("do-footer", Footer);

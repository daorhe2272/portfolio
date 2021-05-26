import { LitElement, html, css } from 'lit-element';

import { Header } from "./components/do-header.js";
import { Intro } from "./components/do-intro.js";
import { Welcome } from "./components/do-welcome.js";
import { Separator } from "./components/do-separator.js";
import { Skills } from "./components/do-skills.js";

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
      <do-header></do-header>
      <do-intro></do-intro>
      <do-welcome></do-welcome>
      <do-separator></do-separator>
      <do-skills></do-skills>
      <do-separator></do-separator>
    `;
  }
}

customElements.define("do-header", Header);
customElements.define("do-intro", Intro);
customElements.define("do-welcome", Welcome);
customElements.define("do-separator", Separator);
customElements.define("do-skills", Skills);

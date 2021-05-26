import { LitElement, html, css } from "lit-element";

export class Welcome extends LitElement {
  static get styles() {
    return css`
      :host {
        min-height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        display: flex;
        margin: 30px 0;
        align-items: center;
      }

      .text-header {
        font-size: 2rem;
        font-weight: bold;
        color: Navy;
        font-family: "Open Sans", sans-serif;
        margin: 0 15px;
      }

      .text {
        font-size: 1.1rem;
        color: black;
        font-weight: 400;
        font-family: "Open Sans";
        line-height: 30px;
        margin: 5px 0;
      }

      .w-image {
        border-radius: 100%;
        max-height: 250px;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="text-header">Hi, I'm David
          <div class="text">
            I'm a philosopher turned developer<br>
            Currently living in Germany<br>
            Passionate about problem solving<br>
            Avid and rapid learner</div>
        </div>
        <img class="w-image" src="/src/assets/Bild01.jpg"></img>
      </div>
    `;
  }
}

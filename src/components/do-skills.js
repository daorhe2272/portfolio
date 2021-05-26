import { LitElement, html, css } from "lit-element";

export class Skills extends LitElement {
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

      .s-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .mini-title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "Oswald";
        margin: 8px 18px;
      }

      .skillz {
        margin: 10px 8px;
      }

      .skill {
        font-size: 1.1rem;
        margin: 3px 0;
        font-weight: 400;
        font-family: "Open Sans", sans-serif;
      }
    `;
  }

  render() {
    return html`
      <div class="title">Skills</div>
      <div class="s-container">
        <div class="mini-title">Languagues
          <div class="skillz">
            <div class="skill">JavaScript</div>
            <div class="skill">HTML</div>
            <div class="skill">CSS</div>
            <div class="skill">Python</div>
          </div>
        </div>
        <div class="mini-title">Frameworks & Tools
          <div class="skillz">
            <div class="skill">Node.js</div>
            <div class="skill">React</div>
            <div class="skill">Web Components</div>
            <div class="skill">SQL & NoSQL DBs</div>
            <div class="skill">RESTful APIs</div>
            <div class="skill">Git & GitHub</div>
          </div>
        </div>
        <div class="mini-title">Data Analysis
          <div class="skillz">
            <div class="skill">Pandas & Numpy</div>
            <div class="skill">Microsoft Power BI</div>
            <div class="skill">Microsoft Excel</div>
            <div class="skill">E-Views</div>
          </div>
        </div>
      </div>
    `;
  }
}

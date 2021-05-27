import { LitElement, html, css } from "lit-element";

export class Intro extends LitElement {
  static get styles() {
    return css`
      .intro-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to right, Navy, Aqua);
        min-height: 250px;
        color: white;
        font-family: "Open Sans", sans-serif;
      }

      @media only screen and (min-width: 601px) {
        .do-name {
          font-size: 4rem;
        }

        .do-title {
          font-size: 2rem;
        }
      }

      @media only screen and (max-width: 600px) {
        .do-name {
          font-size: 3rem;
        }

        .do-title {
          font-size: 1.7rem;
        }

        .intro-links {
          flex-direction: column;
          padding: 8px 0;
        }
      }

      .do-name {
        font-weight: bold;
      }

      .do-title {
        display: flex;
      }

      .intro-links {
        display: flex;
        margin: 8px 0;
      }

      .link-item {
        border: 2px solid white;
        font-size: 1.2rem;
        border-radius: 5px;
        padding: 3px 5px;
        min-width: 100px;
        cursor: pointer;
        text-align: center;
        margin: 5px 8px;
        font-family: "Roboto", "Open Sans", sans-serif;
        text-decoration: none;
        color: white;
      }

      .link-item:hover {
        background-color: white;
        color: Navy;
        font-weight: bold;
      }

      .rw {
        width: 150px;
        margin-right: 8px;
      }

      .rw span {
        opacity: 0;
        position: absolute;
        width: 150px;
        text-align: right;
        animation: rotate 12s linear infinite 0s;
      }

      .rw span:nth-child(1) { animation-delay: 0s; }
      .rw span:nth-child(2) { animation-delay: 3s; }
      .rw span:nth-child(3) { animation-delay: 6s; }
      .rw span:nth-child(4) { animation-delay: 9s; }

      @keyframes rotate {
        0% { opacity: 0; height: 0px; transform: translate3d(0, 15px, 0); }
        4% { opacity: 1; height: 60px; transform: translate3d(0, 0, 0); }
        21% { opacity: 1; height: 60px; transform: translate3d(0, 0, 0); }
        25% { opacity: 0; height: 60px; transform: translate3d(0, -15px, 0); }
        100% { opacity: 0; }
      }
    `;
  }

  render() {
    return html`
      <div class="intro-wrapper">
        <div class="do-name">David Orozco</div>
        <div class="do-title">
          <div class="rw">
            <span>Web</span>
            <span>Full-Stack</span>
            <span>Node.js</span>
            <span>React</span>
          </div>
          <span>Developer</span>
        </div>
        <div class="intro-links">
          <a class="link-item" href="https://github.com/daorhe2272">Github</a>
          <a class="link-item" href="https://www.xing.com/profile/David_Orozco4/cv">Xing</a>
          <a class="link-item" href="/src/assets/CV.pdf">CV</a>
        </div>
      </div>
    `;
  }
}

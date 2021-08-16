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
        display: none;
        flex-direction: column;
        padding: 15px;
      }

      .small-title {
        font-weight: bold;
        margin-bottom: 8px;
        color: Navy;
        font-size: 1.1rem;
        width: 100%;
      }

      .d-text {
        margin-bottom: 18px;
        font-family: "Open Sans", sans-serif;
        display: flex;
        flex-direction: column;
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
            <img src="/src/assets/extra.webp">
            <div class="p-t-title">Distribuidora Extra</div>
            <div class="p-buttons">
              <a class="p-button" @click="${() => {this.showMessage("Private Repository", "This is a private repository. Please refer to the <a href='#contact' onclick='window.scrollTo(0, document.body.scrollHeight);' style='color: blue; text-decoration: none;'>Contact</a> section of my portfolio to contact me and request access.")}}">GitHub*</a>
              <a class="p-button" href="https://www.distribuidoraextracali.com" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription('Distribuidora Extra')}}">Description</a>
            </div>
          </div>
          <div class="i-description">
            <div class="d-text"><div class="small-title">Idea</div>During my 4-months stay in my hometown, Cali, I decided to employ my skills to help my family's logistics-based business. First, I took ownership of all of the business' hosts and domains that were previously in the hands of third party service providers. Then I created a more modern and functional landing page than the ones that were in place and replaced them. I made all URLs to redirect to the main landing page. I included more information regarding the business activities plus products overview, a slider to advertise offers, more detailed contact details and a Google Maps widget with the business location. After deploying and testing the website, I worked on automating reporting and data analysis processes with Python scripts. I run these scripts monthly and send back the reports. To be able to do so, I had to set up a VPN connection and a Unix client in my laptop to communicate with the company's local server.</div>
            <div class="d-text"><div class="small-title">Technology Stack</div>Node.js, Pug Templates, Python (Numpy & Pandas)</div>
            <div class="d-text"><div class="small-title">Challenges</div>Although these tasks were time consuming in nature, I did not meet particularly difficult challenges. However, I had to learn a lot in the process. I did not know how to create a Google Maps widget, create Excel reports with Pyhton, set up a VPN connection, or how to set up a Unix client in a Windows computer. Luckily, it was easy to find instructions and tutorials online on how to complete all these tasks.</div>
          </div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/ihub.PNG">
            <div class="p-t-title">idea-hub.net</div>
            <div class="p-buttons">
              <a class="p-button" @click="${() => {this.showMessage("Private Repository", "This is a private repository. Please refer to the <a href='#contact' onclick='window.scrollTo(0, document.body.scrollHeight);' style='color: blue; text-decoration: none;'>Contact</a> section of my portfolio to contact me and request access.")}}">GitHub*</a>
              <a class="p-button" href="https://www.idea-hub.net" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription('idea-hub.net')}}">Description</a>
            </div>
          </div>
          <div class="i-description">
            <div class="d-text"><div class="small-title">Idea</div>In 2020 I was in Liverpool, waiting for my wife to finish her studies. The pandemic hit in March so I was pretty much stuck there. I decided to spend my time by working in an idea I already had: creating a social network for entrepreneurs so they can collaborate, exchange useful information and help each other achieve their goals.</div>
            <div class="d-text"><div class="small-title">Technology Stack</div>Node.js, Express, MongoDB, RESTful</div>
            <div class="d-text"><div class="small-title">Challenges</div>From the beginning my intention was to create a Minimum Viable Product that would work in the real-world. Consequently, I designed every functionality with great detail taking into consideration its easy of use, security, and reliability. The functionalities were, at the same time, numerous and diverse in nature. To have a Minimum Viable Product, I had to add several functionalities such as user authentication, password recovery, password change, profile editing, sharing of information, posts editing, commenting, bookmarking, reporting of offensive content, among others.<br>However, the biggest challenge I found was when I deployed my application and began receiving feedback: I soon realized that I needed to design a much more complex application in order to gain traction. Entrepreneurs can already exhange information with great ease at social networks like Reddit, Twitter or Quora. In order to offer a differentiated product, I needed to create an ecosystem with the other functionalities I had in mind. That, however, takes time, which I hope to have someday.</div>
          </div>
        </div>
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
            <div class="d-text"><div class="small-title">Idea</div>When Wunderlist was bought by Microsoft and subsequently removed from the PlayStore, it left a gap that was not filled up until recently. There were no user-friendly applications available. I used to share lists with my family, but we stopped doing it because they found other applications unpractical. At the same time, I wanted to learn how to create Single Page Applications with React, so I began working on this small project during my free time. That is, a simple-to-use ToDo list application.</div>
            <div class="d-text"><div class="small-title">Technology Stack</div>React, Node.js, Express, GraphQL, MongoDB, Apollo Server</div>
            <div class="d-text"><div class="small-title">Challenges</div>At the beginning, working with web components was a breeze: designing the application with isolated components felt like a great idea. However, complexities quickly arised when trying to exchange data or functions between components. Luckily, there is a vast amount of resources online to learn the most difficult aspects of working with React. Another tough spot was working with GraphQL, since this query language fails sometimes in telling you the source of an error. To solve this type of errors, I needed a great deal of trial and error. Nevertheless, working with GraphQL became much easier after learning the most common causes of errors and how to solve them.<br>Another aspect of working with React that is usually challenging, is state management. However, I employed the new version of Apollo Server for this application. I was able to use its new feature, Reactive Variables, which made the process of managing the app's state much simpler and straightforward.</div>
          </div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/trello-clone.PNG">
            <div class="p-t-title">Trello Clone</div>
            <div class="p-buttons">
              <a class="p-button" href="https://github.com/daorhe2272/trello-clone" target="_blank">GitHub</a>
              <a class="p-button" @click="${() => {this.showMessage("Website Not Available", "This application has not been currently deployed and, therefore, is not available online.")}}">Website*</a>
              <a class="p-button" @click="${() => {this.showDescription('Trello Clone')}}">Description</a>
            </div>
          </div>
          <div class="i-description">
            <div class="d-text"><div class="small-title">Idea</div>I wanted to learn how to use TypeScript in the context of React applications. I looked for inspiration online and found the idea of building a Trello Clone, so I put myself to work on it.</div>
            <div class="d-text"><div class="small-title">Technology Stack</div>React, Node.js, TypeScript, Apollo Server</div>
            <div class="d-text"><div class="small-title">Challenges</div>After the first initial confusion of using TypeScript for the first time, I was quickly able to grasp the most important concepts in this language and began coding with it successfully. It was not long before I realized why TypeScript, coupled with Visual Studio Code, is a much superior progamming language than JavaScript: the time spent catching errors is considerably diminished when done properly. I don't see myself going back to JavaScript any time soon!</div>
          </div>
        </div>
        <div class="p-item">
          <div class="i-contents">
            <img src="/src/assets/portfolio.PNG">
            <div class="p-t-title">David's Portfolio</div>
            <div class="p-buttons">
              <a class="p-button" href="https://github.com/daorhe2272/portfolio" target="_blank">GitHub</a>
              <a class="p-button" href="https://david-orozco.info" target="_blank">Website</a>
              <a class="p-button" @click="${() => {this.showDescription("David's Portfolio")}}">Description</a>
            </div>
          </div>
          <div class="i-description">
            <div class="d-text"><div class="small-title">Idea</div>The idea here is pretty straightforward: to have a public portfolio where I can show the projects I have worked on in detail. I also took the creation of this portfolio as an opportunity to get hands-on experience working with web components.</div>
            <div class="d-text"><div class="small-title">Technology Stack</div>Web Components, Web-Dev-Server, Node.js, Lit (from Google's Polymer project)</div>
            <div class="d-text"><div class="small-title">Challenges</div>Working with web components was fun and edifying. Learning the basic concepts and starting out was not particularly difficult. The most challenging part, if at all, was working around the encapsulation created by the shadow DOM. However, it is worth mentioning that a portfolio website is very different from a large web application. Managing the interactivity and state of a complex web application would require advanced solutions like creating a customized Event Bus or, even better, a state management library like Redux.</div>
          </div>
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
        console.log(document.body.clientWidth);
        if (document.body.clientWidth > 1130) {
          description.style.width = content.offsetWidth + 0 + "px";
        }
      }
    }
  }
}

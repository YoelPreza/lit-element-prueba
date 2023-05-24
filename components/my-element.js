import { LitElement, html, css } from 'lit';
import { styleLit1 } from '../styles/stylesE1';

export class MyElement extends LitElement {

  static get properties() {
    return {
      myString: {
        type: String, reflect: true, converter: {
          fromAttribute: (value) => value.toUpperCase()
        }
      },

      name: { type: String, reflect: true },

    };
  }
  static styles = [   
    styleLit1,
    css`
    `];
  

  constructor() {
    super();
    this.myString = '';
    this.name = '';
  }
  render() {
    return html`
    
    <div class="div-content">

    <div class="my-div">
    <h1> ${this.myString}  ${this.name}!!</h1>
   
    <input @input=${this.changeName} placeholder="Enter your name">

    <p> Tu nombre tiene ${this.name.length} palabras </p>

   
    </div>
    
    <img class="img-saludo" src="https://i.gifer.com/7NcB.gif"/>

    </div>

 
    `;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  
 





}

window.customElements.define('my-element', MyElement);






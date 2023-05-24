import { LitElement, html, css } from 'lit';
import { styleLit2 } from '../styles/stylesE2';


export class MyElement2 extends LitElement {
    static get properties() {
        return {
            prop1: { type: String, reflect: true, converter: (value) => value.toUpperCase() },
            prop2: { type: Number, reflect: true, attribute: 'age',
              hasChanged(newVal, oldVal) {
                if (newVal > oldVal) {
                  console.log(`${newVal} > ${oldVal} hasChanged: true.`);
                  return true;
                }
                else {
                  console.log(`${newVal} <= ${oldVal} hasChanged: false.`);
                  return false;
                }
              }
            },
            prop3: { type: Boolean, reflect: true },
            prop4: { type: Array, reflect: true },
            prop5: { type: Object, reflect: true },
            img: {type: Object, reflect: true },
            login: { type: Boolean }

        };
    }

  static styles = [
    styleLit2,
    ];
  

    constructor() {
        super();
        this.prop1 = '';
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        this.prop5 = {};
        this.img = {};
        // this.login = true

    }

   

    render() {
        return html`

    
        ${ this.login 
          ? html`<my-element myString = ${this.prop1}  .img = ${this.img}></my-element>
          
         <div>
          <h1> Propiedades </h1>
      
              <div class='propDiv'>
              <p> <br> Number: ${this.prop2}</p>
      
              <button @click="${() => this.prop2=this.change()}">Change Number</button>
              
              </div>
      
              <div class='propDiv'>
              <p> <br> Boolean: ${this.prop3}</p>
              <button @click="${() => this.prop3=this.changeBol()}">Change Boolean</button>
              </div>
          
                <p> <br> Array: ${this.prop4.map((item) =>
                  html`<ul><li>${item}</li></ul>`)}
                </p>
          
              <p> <br> Objetos:
              
              ${Object.keys(this.prop5).map(key =>
              html`<p> ${key}: ${this.prop5[key]} </p>`)}
              </p>
                </div>
          ` 
          : html` <my-login @signin="${ this._hiddenLogin }"></my-login>`}
      
        `;
    }

    change() {
      return Math.floor(Math.random()*10);
      }

      changeBol(){
        return  this.prop3?  this.prop3 = false : this.prop3 = true
      }

      _hiddenLogin() {
        this.login = true;
      }
}
window.customElements.define('my-element2', MyElement2);
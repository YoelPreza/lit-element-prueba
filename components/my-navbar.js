import { LitElement, html, css } from 'lit';
import { stylesNavbar } from '../styles/styleNavbar';

export class MyNavbar extends LitElement {
    static styles =  [
      stylesNavbar,
      css``
    ]

    static get properties() {
        return {
          ruta1: {type: String, reflect: true, },
          ruta2: {type: String, reflect: true, },
          ruta3: {type: String, reflect: true, },
          titulo: {type: String, reflect: true, },
          img: { type: Object, reflect: true },
          // profile: { type: Object, reflect: true }
        };
      }

    constructor() {
        super();
        this.ruta1 = "Ruta 1";
        this.ruta2 =  "Ruta 2";
        this.ruta3 = "Ruta 3";
        this.titulo = "Titulo"
       this.img = { }
      //  this.profile = ""
    }

    render(){
    return html`
    <div class="main-content">
    <a href=${this.img.href} target="_blank"> <img src=${this.img.src} alt=${this.img.alt}/></a>
    <h1>${this.titulo} </h1>
    <div class="rutas-content">
    <span> ${this.ruta1}  </span>   <span> ${this.ruta2}  </span> <span> ${this.ruta3}  </span> 
    </div> 
   
     
     </div>

    `}


}
window.customElements.define('my-navbar', MyNavbar);
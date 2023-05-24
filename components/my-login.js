import { LitElement, css, html } from "lit";
import { styleLogin } from "../styles/styleLogin";

export class MyLogin extends LitElement {
    static get properties() {
        return {
            email: { type: String },
            password: { type: String },
        };
    }

    constructor() {
        super();
        this.email = '';
        this.password = '';
    }
    static styles = [
        styleLogin

    ]

    render() {
        return html`
            <div class="container">
                <h1>Bienvenido!</h1>
                <input value=${this.email} @input=${this._handleEmailChange} type="email" placeholder="Write your email">
                <input value=${this.password} @input=${this._handlePasswordChange} type="password" placeholder="Password">

                <button @click="${this._login}">Sing in</button>
            </div>
        `;
    }

    _handleEmailChange(event) {
        this.email = event.target.value;

    }

    _handlePasswordChange(event) {
        this.password = event.target.value;
    }

    usuario = {
        email: "prezayoel@gmail.com",
        pasword: 1234
    }

    _login() {

        if (this.email == this.usuario.email && this.password == this.usuario.pasword) {
            this.dispatchEvent(new CustomEvent('signin', {
                detail: { login: true },
                bubbles: true, composed: true
            }));

        }
        else {
            return alert("usuario o contraseña incorrectos")
        }
    }
}




window.customElements.define('my-login', MyLogin);

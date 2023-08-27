
class Keyboard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    buildKeys(letter) {
        const key = document.createElement("button");
        key.setAttribute("id", `key-${letter}`);
        key.setAttribute("onclick", `checkChosenLetter('${letter}')`)
        key.textContent = letter;

        return key;
    }

    build() {

        // <div> nine keys set
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "keys");

        // <button> keyboard keys
        const key01 = this.buildKeys(this.getAttribute("key01"));
        const key02 = this.buildKeys(this.getAttribute("key02"));
        const key03 = this.buildKeys(this.getAttribute("key03"));
        const key04 = this.buildKeys(this.getAttribute("key04"));
        const key05 = this.buildKeys(this.getAttribute("key05"));
        const key06 = this.buildKeys(this.getAttribute("key06"));
        const key07 = this.buildKeys(this.getAttribute("key07"));
        const key08 = this.buildKeys(this.getAttribute("key08"));
        const key09 = this.buildKeys(this.getAttribute("key09"));

        componentRoot.appendChild(key01);
        componentRoot.appendChild(key02);
        componentRoot.appendChild(key03);
        componentRoot.appendChild(key04);
        componentRoot.appendChild(key05);
        componentRoot.appendChild(key06);
        componentRoot.appendChild(key07);
        componentRoot.appendChild(key08);
        componentRoot.appendChild(key09);
    
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .keys button {
                width: 24px;
                height: 24px;
                margin: 1px;
                margin-bottom: 5px;
                cursor: pointer;
                box-shadow: 0px 2px 5px dimgrey;
                border-radius: 5px;
                border: 1px solid dimgrey;
                color: rgba(82, 121, 82, 0.733);
                font-family: 'Ubuntu', sans-serif;
                font-weight: 900;
            }
            
            .keys button:disabled {
                cursor: not-allowed;
            }
            
            .keys button:hover {
                transform: scale(1.3);
            }

            @media (min-width: 321px) {
                .keys button {
                    width: 25px;
                    height: 25px;
                }
            }
            
            @media (min-width: 376px) {
                .keys button {
                    width: 30px;
                    height: 30px;
                }
            }
            
            @media (min-width: 426px) {
                .keys button {
                    width: 36px;
                    height: 36px;
                }
            }
            
            @media (min-width: 769px) {
                .keys button {
                    width: 68px;
                    height: 38px;
                    font-size: 1.25em;
                }
            }
        `;

        return style;
    }
}

customElements.define("keyboard-nine", Keyboard);
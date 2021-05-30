class NavElement extends HTMLElement {

    public constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const menuDiv = document.createElement("div");
        menuDiv.setAttribute("class", "menu");

        const ul = document.createElement("ul");
        // TODO

    }

}

class FooterElement extends HTMLElement {

    public constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const footerDiv = document.createElement("div");
        footerDiv.setAttribute("class", "footer-element");

        const footerLeft = document.createElement("div");
        footerLeft.setAttribute("class", "footer-left");
        const copyright = document.createElement("p");
        copyright.textContent = "© 2021 Cooper Cowley. Trademarks and brands are the property of their respective owners."

        const footerRight = document.createElement("div");
        footerRight.setAttribute("class", "footer-right");
        const credit = document.createElement("p");
        credit.textContent = "Made with ❤ by Zilleyy.";

        const style = document.createElement("style");
        style.textContent = ":root{font-family:Roboto,serif;--nav-height:60px;--footer-height:50px;--nav-link-hover:#FFFFFF;--text-fill:#999999;--background-fill:#1A1A1A}.footer-element{width:100%;height:var(--footer-height);position:fixed;left:0;bottom:0;background-color:var(--background-fill);color:var(--text-fill)}.footer-left{margin-left:calc(var(--footer-height)/ 3);position:absolute;left:0;bottom:0;text-align:left}.footer-right{width:100%;margin-right:calc(var(--footer-height)/ 3);position:absolute;right:0;bottom:0;text-align:right}";

        footerLeft.appendChild(copyright);
        footerRight.appendChild(credit);
        footerDiv.appendChild(footerLeft);
        footerDiv.appendChild(footerRight);

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(footerDiv);
    }

}

customElements.define("nav-module", NavElement);
customElements.define("footer-module", FooterElement);

window.onload = () => {
    const btn = document.getElementsByClassName("btn")[0];
    const menu = document.getElementsByClassName("menu")[0];

    btn.addEventListener("click", () => {
        btn.classList.toggle("btnc");
        menu.classList.toggle("menuc");
    });
}



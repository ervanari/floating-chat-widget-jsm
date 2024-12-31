import { createRoot } from "react-dom/client";
import FloatingChatButton from "./components/FloatingChatButton";

class FloatingChatWidget extends HTMLElement {
    constructor() {
        super();
        this.mountPoint = null;
        this.root = null;
    }

    connectedCallback() {
        if (!this.mountPoint) {
            this.mountPoint = document.createElement("div");
            this.appendChild(this.mountPoint);
        }

        const socialAgents = JSON.parse(this.getAttribute("socialAgents") || "[]");

        this.root = createRoot(this.mountPoint);
        this.root.render(<FloatingChatButton socialAgents={socialAgents} />);
    }

    disconnectedCallback() {
        if (this.root) {
            this.root.unmount();
        }
    }
}

customElements.define("floating-chat-widget", FloatingChatWidget);

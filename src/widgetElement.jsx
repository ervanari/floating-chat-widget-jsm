// import React from "react";
import { initFloatingChatWidget } from "./components/FloatingChatButton";
import {createRoot} from "react-dom/client";

class FloatingChatWidget extends HTMLElement {
    connectedCallback() {
        const widget = initFloatingChatWidget(this);
        createRoot(document.getElementById('floating-chat-widget')).render(
            widget, this
        )
    }
}

customElements.define("floating-chat-widget", FloatingChatWidget);

// import { createRoot }  from "react-dom/client";
// import FloatingChatButton from "./components/FloatingChatButton";
//
// class FloatingChatWidget extends HTMLElement {
//     connectedCallback() {
//         const socialAgents = JSON.parse(this.getAttribute("socialAgents") || "[]");
//         createRoot.render(<FloatingChatButton socialAgents={socialAgents} />, this);
//     }
// }
//
// customElements.define("floating-chat-widget", FloatingChatWidget);

// import React, { useState } from "react";
// import cn from "classnames";
// import "./FloatingChatButton.css";
//
// const FloatingChatButton = ({ agents, socialAgents, config }) => {
//     const [open, setOpen] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//
//     const openChat = () => {
//         setIsModalOpen(true);
//     };
//
//     const handleClickUrl = (url,label) => {
//         if (label === 'Chat Bot' && url === '') {
//             openChat()
//         } else {
//             window.open(url, "_blank")
//         }
//     };
//
//     return (
//         <>
//             <div className="container">
//                 <h1>Selamat Datang di Website RS Vertikal</h1>
//                 <p>
//                     Halaman ini dikembangkan sebagai platform pengujian untuk fitur widget
//                     chat
//                 </p>
//                 <div className="footer">Synergix Solution &copy; 2024</div>
//             </div>
//
//             <ul className={cn("fab-container", {open})} onClick={() => setOpen(!open)}>
//                 <li className="fab-button">
//                     <img src="https://img.icons8.com/3d-fluency/94/online-support--v3.png" alt="Live Chat" width={30}/>
//                 </li>
//                 {open && socialAgents.map((action, index) => (
//                     <li
//                         style={{transitionDelay: `${index * 25}ms`}}
//                         className={cn("fab-action", {open})}
//                         key={action.label}
//                         onClick={() => handleClickUrl(action.onClick, action.label)}
//                     >
//                         <img src={action.icon} alt={action.label} width={30}/>
//                         <span className="tooltip">{action.label}</span>
//                     </li>
//                 ))}
//             </ul>
//
//             {/*{isModalOpen && <ChatWidget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}*/}
//         </>
//     );
// };
//
//
// export const initFloatingChatWidget = (element) => {
//     const agents = JSON.parse(element.getAttribute("agents") || "[]");
//     const socialAgents = JSON.parse(element.getAttribute("socialAgents") || "[]");
//     const config = JSON.parse(element.getAttribute("config") || "{}");
//
//     return React.createElement(FloatingChatButton, { agents, socialAgents, config });
// };


import React from "react";
import { useState } from "react";
import "./FloatingChatButton.css";

// eslint-disable-next-line react/prop-types
const FloatingChatButton = ({ socialAgents }) => {
    console.log(socialAgents);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="floating-chat">
            {/* Social Agent Buttons */}
            {isOpen &&
                // eslint-disable-next-line react/prop-types
                socialAgents.map((agent, index) => (
                    <a
                        key={index}
                        href={agent.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-agent"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <img src={agent.icon} alt={agent.platform} />
                    </a>
                ))}

            {/* Main Button */}
            <button className="main-button" onClick={toggleOpen}>
                {isOpen ? "✖" : "💬"}
            </button>
        </div>
    );
};


export const initFloatingChatWidget = (element) => {
    const socialAgents = JSON.parse(element.getAttribute("socialAgents") || "[]");

    return React.createElement(FloatingChatButton, {socialAgents});
};

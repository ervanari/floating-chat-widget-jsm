import { useState } from "react";
import cn from "classnames";
import ChatWidget from "./widget-chat";
import "./styles.scss"

const FloatingChatButton = ({ socialAgents }) => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openChat = () => {
        setIsModalOpen(true);
    };

    const handleClickUrl = (url,label) => {
        if (label === 'Chat Bot' && url === '') {
            openChat()
        } else {
            window.open(url, "_blank")
        }
    };

    return (
        <>
            <ul className={cn("fab-container", {open})} onClick={() => setOpen(!open)}>

                <li className="fab-button">
                    <img src="https://img.icons8.com/3d-fluency/94/online-support--v3.png" alt="Live Chat" width={30}/>
                </li>

                {open && socialAgents.map((action, index) => (
                    <li
                        style={{transitionDelay: `${index * 25}ms`}}
                        className={cn("fab-action", {open})}
                        key={action.label}
                        onClick={() => handleClickUrl(action.url, action.label)}
                    >
                        <img src={action.icon} alt={action.label} width={30}/>
                        <span className="tooltip">{action.label}</span>
                    </li>
                ))}

            </ul>

            {isModalOpen && <ChatWidget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default FloatingChatButton;

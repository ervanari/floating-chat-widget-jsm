import { useState, useEffect } from "react";

const ChatWidget = (isOpen) => {
    const [isOpens, setIsOpens] = useState(!isOpen);

    const toggleModal = () => {
        setIsOpens(!isOpen);
    };

    useEffect(() => {
        console.log(isOpens);

        isOpen && setIsOpens(isOpen);

    }, []);

    return (
        <div>
            {isOpens && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "90px",
                        right: "20px",
                        width: "300px",
                        height: "400px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                        overflow: "hidden",
                    }}
                >
                    {/* Header Modal */}
                    <div
                        style={{
                            backgroundColor: "#007BFF",
                            color: "#fff",
                            padding: "10px",
                            textAlign: "center",
                        }}
                    >
                        <strong>Live Chat</strong>
                        <button
                            onClick={toggleModal}
                            style={{
                                float: "right",
                                background: "transparent",
                                border: "none",
                                color: "#fff",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Body Modal */}
                    <div
                        style={{
                            padding: "10px",
                            height: "calc(100% - 60px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ flexGrow: 1, overflowY: "auto" }}>
                            <p>👋 Hi! How can we help you today?</p>
                            {/* Area Chat */}
                            <div
                                style={{
                                    backgroundColor: "#f1f1f1",
                                    padding: "10px",
                                    borderRadius: "8px",
                                    margin: "5px 0",
                                }}
                            >
                                Example message from support.
                            </div>
                        </div>

                        {/* Input Pesan */}
                        <div style={{ display: "flex", gap: "5px" }}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                style={{
                                    flexGrow: 1,
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #ddd",
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: "#007BFF",
                                    color: "#fff",
                                    border: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;

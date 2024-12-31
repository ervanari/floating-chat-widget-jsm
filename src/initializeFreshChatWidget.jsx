let isFreshChatInitialized = false;

export function initializeFreshChatWidget() {
    if (typeof window.fcWidget === "undefined") {
        console.error("FreshChat script is not loaded. Please include FreshChat script in your HTML.");
        return;
    }

    window.fcWidget.init({
        token: "03c296a9-71a6-4cfb-9159-08d4e327222e", // Ganti dengan App ID FreshChat Anda
        host: "https://wchat.freshchat.com",
    });

    console.log("FreshChat widget initialized successfully.");
}

export function openFreshChat() {
    if (typeof window.fcWidget === "undefined") {
        console.error("FreshChat script is not loaded. Please include FreshChat script in your HTML.");
        return;
    }

    if (!isFreshChatInitialized) {
        window.fcWidget.init({
            token: "03c296a9-71a6-4cfb-9159-08d4e327222e", // Ganti dengan App ID FreshChat Anda
            host: "https://wchat.freshchat.com",
        });
        isFreshChatInitialized = true;
    }

    // Membuka jendela obrolan FreshChat
    window.fcWidget.open();
}

export function closeFreshChat(onCloseCallback) {
    if (typeof window.fcWidget === "undefined") {
        console.error("FreshChat script is not loaded. Please include FreshChat script in your HTML.");
        return;
    }

    // Menutup jendela obrolan FreshChat
    window.fcWidget.close();

    // Memanggil callback untuk mengembalikan ke widget sebelumnya
    if (onCloseCallback) {
        onCloseCallback();
    }
}

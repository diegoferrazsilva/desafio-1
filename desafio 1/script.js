document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.getElementById("chatButton");
    const chatWindow = document.getElementById("chatWindow");
    const closeButton = document.getElementById("closeButton");

    chatButton.addEventListener("click", function() {
        chatWindow.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        chatWindow.style.display = "none";
});
});
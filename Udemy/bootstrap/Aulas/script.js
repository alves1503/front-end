function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");
    const message = input.value.trim();
  
    if (message !== "") {
      const messageDiv = document.createElement("div");
      messageDiv.className = "message";
      messageDiv.textContent = message;
      chatBox.appendChild(messageDiv);
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  document.getElementById("messageInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
  
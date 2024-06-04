const BASE_URL = "http://localhost:5000/api/messages";

export async function sendMessage(message, receiverId) {
  if (!localStorage.getItem("user")) {
    return [];
  }
  const { user } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(`${BASE_URL}/send/${receiverId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: user._id, message }),
    });
    const newMessage = await response.json();
    return newMessage;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMessages(selectedConversation) {
  if (!localStorage.getItem("user")) {
    return [];
  }
  const { user } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(`${BASE_URL}/${selectedConversation._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: user._id }),
    });
    const messages = await response.json();
    return messages;
  } catch (error) {
    console.error(error);
  }
}

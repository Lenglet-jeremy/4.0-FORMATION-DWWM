const Conversation = require("../models/conversation.schema");
const Message = require("../models/message.schema");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  try {
    const { message, id: senderId } = req.body;
    const { id: receiverId } = req.params;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      console.log(receiverSocketId);
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.body.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { sendMessage, getMessages };

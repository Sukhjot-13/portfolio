"use server";
import dbConnect from "@/lib/dbConnect";
import Message from "@/Models/MessageModel";

export async function submitMessage(name, email, message) {
  await dbConnect();
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    return true;
  } catch (error) {
    console.error("Error saving message:", error);
    return false;
  }
}

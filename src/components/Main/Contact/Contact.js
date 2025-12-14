"use client";
import React, { useState } from "react";
import EmailSvg from "@/lib/Svg/EmailSvg";
import SendButton from "@/components/Main/Contact/Button/SendButton";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import { submitMessage } from "@/actions/Contact";

function Contact({ direction }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setMessageStatus(null); // Clear previous status

    try {
      const res = await submitMessage(
        formData.name,
        formData.email,
        formData.message
      );
      if (res) {
        setMessageStatus("sent");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setMessageStatus("failed");
      }
    } catch (err) {
      console.log(err);
      setMessageStatus("failed");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <SwipeTransition direction={direction}>
      <div className="p-5 lg:p-7">
        <h1 className="text-2xl font-bold text-primary-heading">Contact Me</h1>
        <Underline />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <EmailSvg height={300} width={300} />
          <form className="w-full max-w-lg mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-highlight-text text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border border-highlight-text rounded w-full py-2 px-3 bg-tertiary-bg text-primary-text leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={isSending}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-highlight-text text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-highlight-text  rounded w-full py-2 px-3 bg-tertiary-bg text-primary-text leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={isSending}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-highlight-text text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-highlight-text  rounded w-full py-2 px-3 bg-tertiary-bg text-primary-text leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                disabled={isSending}
              ></textarea>
            </div>
            <div className="flex items-center justify-center ">
              <SendButton disabled={isSending} />
            </div>
            {messageStatus === "sent" && (
              <div className="text-center text-sm text-green-300 mt-6">
                Message Sent Successfully!
              </div>
            )}
            {messageStatus === "failed" && (
              <div className="text-center text-sm text-red-300 mt-6 h-1">
                Failed to Send Message!
              </div>
            )}
          </form>
        </div>
      </div>
    </SwipeTransition>
  );
}

export default Contact;

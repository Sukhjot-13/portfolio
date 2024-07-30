"use client";
import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);

  const showModal = (content) => {
    setContent(content);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isVisible && <Modal content={content} />}
    </ModalContext.Provider>
  );
};

const Modal = ({ content }) => {
  return (
    <div
      style={{ height: "100dvh" }}
      className="fixed top-0 bg-black bg-opacity-50 w-screen h-[100vh] flex items-center justify-center z-50 overflow-hidden"
    >
      {content}
    </div>
  );
};

export const useModal = () => useContext(ModalContext);

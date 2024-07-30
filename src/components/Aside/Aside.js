"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sukhjotImage from "@/images/sukhjot1.png";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineCake } from "react-icons/md";

function Aside() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const contacts = [
    {
      heading: "Email",
      icon: <MdOutlineEmail color="hsl(45, 100%, 72%)" />,
      text: "sukhjotsingh441@gmail.com",
    },
    {
      heading: "Phone",
      icon: <MdOutlineLocalPhone color="hsl(45, 100%, 72%)" />,
      text: "+1 647-530-8909",
    },
    {
      heading: "Birthday",
      icon: <MdOutlineCake color="hsl(45, 100%, 72%)" />,
      text: "13th April, 2004",
    },
  ];

  return (
    <motion.div
      initial={{ translateX: "-200%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-secondary-bg h-fit overflow-hidden flex flex-col justify-center lg:items-center gap-10 rounded-3xl p-3 lg:w-1/4 lg:sticky lg:top-20"
    >
      <div className="flex justify-between relative">
        <div className="flex justify-start items-center mt-5 lg:flex-col gap-10">
          <div className="h-24 w-24 overflow-hidden rounded-3xl relative border-2 border-black bg-tertiary-bg lg:mt-10 lg:p-4 lg:h-40 lg:w-40">
            <div className="overflow-hidden h-full w-full relative rounded-3xl">
              <Image
                src={sukhjotImage}
                alt="Sukhjot"
                className="w-full h-full object-contain"
                priority={true}
              />
            </div>
          </div>
          <div className=" text-2xl lg:text-3xl text-primary-text">
            Sukhjot Singh
          </div>
        </div>
        <div className="absolute -top-3 -right-3 lg:hidden">
          <button
            onClick={() => setContactsOpen((prev) => !prev)}
            style={{
              color: contactsOpen ? "hsl(45, 100%, 72%)" : "",
            }}
            className="text-primary-text hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
          >
            Show Contacts
          </button>
        </div>
      </div>
      <AnimatePresence>
        {contactsOpen && (
          <>
            <div className="border-t-2 border-white w-full"></div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden overflow-hidden gap-6 flex flex-col mb-4"
            >
              {contacts.map((contact) => (
                <div key={contact.text} className="flex items-center gap-4  ">
                  <div className="p-2 border-white border-2 rounded-xl">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-highlight-text text-xs">
                      {contact.heading}
                    </p>
                    <p className="text-md text-primary-text">{contact.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="hidden lg:flex flex-col gap-5 pb-6">
        <div className="border-t-2 border-white w-full "></div>

        {contacts.map((contact) => (
          <div key={contact.text} className="flex items-center gap-4 ">
            <div className="p-2 border-white border-2 rounded-xl ">
              {contact.icon}
            </div>
            <div>
              <p className="text-highlight-text text-xs">{contact.heading}</p>
              <p className="text-md text-primary-text">{contact.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Aside;

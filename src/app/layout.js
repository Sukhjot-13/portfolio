import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/Contexts/ModalContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Sukhjot's Portfolio",
  description:
    "Explore my portfolio showcasing my skills in web development, including React, Next.js, MongoDB, and Tailwind CSS. View my projects, experience, and contact information. Let's create something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}

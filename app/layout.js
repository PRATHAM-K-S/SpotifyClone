"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMob from "./components/NavMob";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={`${inter.className} bg-gradient-to-b from-[#191A19] to-black min-h-screen text-white`}
        >
          {children}
          <NavMob />
        </body>
      </Provider>
    </html>
  );
}

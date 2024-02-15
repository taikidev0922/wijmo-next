"use client";
import "./globals.css";
import * as Yup from "yup";
import "@grapecity/wijmo.styles/wijmo.css";
import { useState } from "react";
import NavigationDrawer from "@/components/NavigationDrawer";
import AppBar from "@/components/AppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  Yup.setLocale({
    mixed: {
      required: "必須項目です",
    },
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Application</title>
      </head>
      <body className="bg-gray-100">
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
            isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
        <NavigationDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <div className="relative">
          <AppBar setIsDrawerOpen={setIsDrawerOpen} />
          <div className="p-5 ">{children}</div>
        </div>
      </body>
    </html>
  );
}

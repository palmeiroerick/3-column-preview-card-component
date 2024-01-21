import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { bigShouldersDisplay, lexendDeca } from "./fonts";

export const metadata: Metadata = {
  title: "3 Column Preview Card Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${lexendDeca.variable} ${bigShouldersDisplay.variable}`}
    >
      <body className="flex justify-center py-16 lg:h-screen lg:items-center">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

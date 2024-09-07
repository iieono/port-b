import type { Metadata } from "next";
import "./globals.css";
import "./font-utilities.css"; // Import the new font utilities

// Import all custom fonts
import {
  styro,
  sharpie,
  pencerio,
  kalam,
  epilogue,
  array,
  alpino,
  technor,
  elevator,
  boxing,
  switzer,
  satoshi,
  chillax,
  kola,
} from "../../fonts";

export const metadata: Metadata = {
  title: "//e0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
      ${styro.variable} 
      ${sharpie.variable} 
      ${pencerio.variable} 
      ${kalam.variable} 
      ${elevator.variable} 
      ${epilogue.variable}
      ${array.variable}
      ${chillax.variable}
      ${boxing.variable}
      ${kola.variable}
      ${technor.variable}
      ${alpino.variable}
      ${switzer.variable}
      ${satoshi.variable}
    `}
    >
      <body>{children}</body>
    </html>
  );
}

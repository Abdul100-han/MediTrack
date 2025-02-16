import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
// import { ThemeProvider } from "next-themes";

// import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MediTrack",
  description:
    "MediTrack is a modern Patient Management System (PMS) designed to streamline healthcare operations by enhancing patient data management, appointment scheduling, and communication between healthcare providers and patients.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''     
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
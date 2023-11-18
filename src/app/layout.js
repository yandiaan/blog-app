import { Poppins } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./_contexts/LangContext";
import { ThemeProvider } from "./_contexts/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Blog App",
  description: "Blog App for who loved to write",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LangProvider>
        <ThemeProvider>
          <body className={poppins.className}>{children}</body>
        </ThemeProvider>
      </LangProvider>
    </html>
  );
}

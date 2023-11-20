import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/organisms/navbar";
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
    <html>
      <LangProvider>
        <ThemeProvider>
          <body className={`${poppins.className} dark`}>
            <header>
              <Navbar />
            </header>
            <main className="bg-gray-100 dark:bg-gray-600 dark:text-white">{children}</main>
          </body>
        </ThemeProvider>
      </LangProvider>
    </html>
  );
}

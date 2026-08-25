import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import VerifyBanner from "./components/verifybanner";
import BootstrapClient from "./components/BootstrapClient";
import Loader from "./components/Loader";

export const metadata = {
  title: "BitsBuys",
  description: "exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <BootstrapClient />
        <Loader />
        <ThemeProvider>
          {/* <VerifyBanner /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
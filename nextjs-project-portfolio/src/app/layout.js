import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Juan María",
  description: "Este es mi portafolio web sobre desarrollo web y programación",
  

  
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <head>
        <link rel="icon" href="/coding.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>

          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

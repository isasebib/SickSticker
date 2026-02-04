//import { Geist, Geist_Mono } from "next/font/google";
import "./fanta.css";
import "./globals.css";
import Head from "./head"
import Link  from "next/link";
import Cart from "@/components/cart";
import EmailInput from "@/components/EmailInput";



export const metadata = {
  title: "SickSticker",
  description: "A Coder's Heaven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        
        <header> 
          <div className="header-content">
            <Link href="/">
              <h1>SickSticker</h1>
            </Link>
            <h5 className="mid-text">The Best for the Best!</h5>
            <Cart></Cart>
          </div>
        </header>
        <main>
          {children}
          <div id="portal" ></div>
        </main>
        <div className="hr" />
        <footer>

          <div className="email-container">
            <h5>Stay updated about our sales!</h5>
            <EmailInput />
          </div>

          <div className="links-container">
            <div>
              <h3>İsa Şebib</h3>
              <Link target={"_blank"} href={"/"}>Portfolio</Link>
            </div>
            <div>
              <h3>Store</h3>
              <Link target={"_blank"} href={"/"}>Home</Link>
              <Link target={"_blank"} href={"/cart"}>Cart</Link>
            </div>
            <div>
              <h3>Support</h3>
              <Link target={"_blank"} href={"/"}>Contact</Link>
              <Link target={"_blank"} href={"/"}>FAQ</Link>
            </div>
          </div>

          <div className="socials">
            <p>© <a href="https://www.isasebib.com" target="_blank">İsa Şebib</a> 2025<br />Built with NextJS </p>
            <div className="socials-links">
              
              <Link target={"_blank"} href={"https://github.com/isasebib"}><i className="fa-brands fa-github"></i></Link>
              
              <Link target={"_blank"} href={"https://linkedin.com/isasebib"}><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

/* <div id="portal" />
        <div id="app"></div>*/
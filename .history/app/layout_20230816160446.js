import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const metadata = {
  title: 'DW Air Conditioning & Heating Services',
  description: 'Air Conditioning & Heating Services Throughout London & Surrounding Areas',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className="index-page">
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}

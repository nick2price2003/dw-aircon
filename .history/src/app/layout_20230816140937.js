import React from "react";
import { Metadata } from 'next'

import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <meta name='title' content='DW Air Conditioning & Heating Services' />
      <meta name='description' content='Air Conditioning & Heating Services Throughout London & Surrounding Areas' />
      <body className="index-page">{children}</body>
    </html>
  )
}

'use client'

import React from "react";
import { HydrationProvider } from "react-hydration-provider";

import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const metadata = {
  title: 'DW Air Conditioning & Heating Services',
  description: 'Air Conditioning & Heating Services Throughout London & Surrounding Areas',
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
              <meta name='description' content='Description' />
      <HydrationProvider>
      <body className="index-page">{children}</body>
      </HydrationProvider>
    </html>
  )
}

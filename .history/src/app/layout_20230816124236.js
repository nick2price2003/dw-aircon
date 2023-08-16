'use client'

import React, { useEffect } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";

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
    useEffect(() => {
      window.scroll(0, 0);
    });
  
  return (
    <html lang="en">
      <HydrationProvider>
      <body className="index-page">{children}</body>
      </HydrationProvider>
    </html>
  )
}

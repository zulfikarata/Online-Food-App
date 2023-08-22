"use client";
import React from 'react';
import './globals.css'
import { Nunito } from 'next/font/google';



const inter = Nunito({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
      </body>
    </html>
  )
}

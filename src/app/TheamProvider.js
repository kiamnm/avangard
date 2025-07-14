'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function TheamProvider({children}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      enableSystem={true}
      defaultTheme="light"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import "./style.css"
import { IoMoonOutline } from "react-icons/io5"
import { useTheme } from 'next-themes'

export default function DarkModeBtn() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null 

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div
      className="dark-mode-btn-container p-2 cursor_pointer bg_surface"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      title={`تغییر تم به ${currentTheme === 'dark' ? 'روشن' : 'تاریک'}`}
    >
      <IoMoonOutline
        style={{
          fontSize: "22px",
          color: currentTheme === 'dark' ? '#f7f5f2' : '#3a3232'
        }}
      />
    </div>
  )
}

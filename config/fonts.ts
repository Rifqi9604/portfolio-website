import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import { Comfortaa as FontComfortaa } from "next/font/google"

export const fontComfortaa = FontComfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

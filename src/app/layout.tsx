import './globals.css'
import { Trirong } from 'next/font/google';

const trirong = Trirong({
  subsets: ['latin'],
  weight: '400',
  style: 'italic'
})
export const metadata = {
  title: 'Afro Crown',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Trirong:ital@1&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}

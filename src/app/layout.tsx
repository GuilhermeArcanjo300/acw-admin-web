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
      <body>{children}</body>
    </html>
  )
}

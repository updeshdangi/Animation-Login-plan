import './globals.css'

export const metadata = {
  title: 'Welcome to ItzFizz - Scroll Animation',
  description: 'A premium scroll-driven hero section animation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="smooth-scroll">{children}</body>
    </html>
  )
}

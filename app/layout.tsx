import './globals.scss'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexander Petrache',
  description: 'CV of Alexander Petrache for the job role: Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="Yuni_transparent.png" type="image/x-icon" />
      </head>
      
      <body className={`
      bg-white text-slate-900  
      md:max-h-fit
      ${ysabeau.className}`}>
          {children}
      </body>
    </html>
  )
}

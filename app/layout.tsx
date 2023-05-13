import './globals.scss'
import { Ysabeau } from 'next/font/google'

const ysabeau = Ysabeau({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexander Petrache',
  description: 'CV of Alexander Petrache for job role: Web Developer',
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
      
      <body className={ysabeau.className} style={{width:"100vw",display:"flex",justifyContent:"center",overflowX:"hidden",height:"1122px",maxHeight:"1123px"}}>
        {children}
      </body>
    </html>
  )
}

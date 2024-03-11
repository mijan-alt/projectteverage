import { Inter } from 'next/font/google'
import { Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navtest'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
        {/* <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62172851fe5d176bbedd0632"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/js/webflow.b6bc9db91.js"
          type="text/javascript"
        ></script> */}
     
     <body className={syne.className}>
        <Navbar font={syne.className} />
        {children}
      </body>
      <Footer font={syne.className} />
    </html>
  );
}

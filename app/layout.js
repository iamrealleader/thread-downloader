import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Downloader8k.com - Downloader8ks is an open-source Thread videos downloading website for dowloading instagram thread posts and thread or videos.',
  description: 'Downloader8k is a user-friendly web application that simplifies the process of downloading videos from Instagram threads. With Downloader8k, you can easily download multiple videos from a thread without the need for any complicated steps or technical expertise. By simply pasting the link of the Instagram thread into the provided input field and clicking the "Download" button, Downloader8k utilizes its built-in API to extract the video URLs from the thread. It then generates convenient download links for each video, allowing you to effortlessly save them to your device. The web app is designed to be intuitive and accessible, catering to users of all experience levels. It is completely free to use, eliminating any financial barriers. With Downloader8k, you can enjoy the convenience of downloading Instagram thread videos hassle-free, whether you are using a desktop computer, laptop, smartphone, or tablet. Experience the joy of watching your favorite Instagram thread videos offline at your convenience, all with the help of Downloader8k.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='main'>
            <div className='gradient' />
          </div>
          <Navbar/>
        {children}
        </body>
    </html>
  )
}

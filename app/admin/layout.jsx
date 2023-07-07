import '../globals.css'
import { Inter } from 'next/font/google'
import AdminHeader from './components/AdminHeader'
import AdminSidebar from './components/AdminSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Panel',
  description: 'admin work here',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminHeader/>
        <div className="flex">
            <div className="w-2/12 bg-black"><AdminSidebar/></div>
            <div className="w-10/12 p-3">{children}</div>
        </div>
        </body>
    </html>
  )
}

import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
  return (
    <div className='bg-black text-white flex flex-col h-[90vh]'>
        <Link href="/admin" className='text-white hover:bg-slate-800 px-3 py-2'>Dashboard</Link>
        <Link href="/admin/topic" className='text-white hover:bg-slate-800 px-3 py-2'>Manage Topic</Link>
        <Link href="/admin/content" className='text-white hover:bg-slate-800 px-3 py-2'>Manage Content</Link>
        <Link href="/admin/user" className='text-white hover:bg-slate-800 px-3 py-2'>Manage User</Link>
    </div>
  )
}

export default AdminSidebar
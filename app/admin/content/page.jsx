import Link from 'next/link'
import React from 'react'
import AdminContentCalling from '../components/AdminContentCalling';

const page = async () => {

    let callingContent  = await fetch("http://127.0.0.1:3000/api/content",{cache:"no-store"});
    callingContent = await callingContent.json();
  return (
    <div>
        
<div className="relative overflow-x-auto">
    <div className="flex justify-between">
        <h1 className='text-2xl font-bold'>Manage Contents</h1>
        <Link href="/admin/content/insert" className='bg-green-600 hover:bg-green-800 text-white px-3 py-2 rounded'>Add Content</Link>
    </div>
   <AdminContentCalling contents={callingContent.data}/>
</div>

    </div>
  )
}

export default page
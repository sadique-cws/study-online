import Link from 'next/link'
import React from 'react'

const Side = async () => {
  const callingTopics = await fetch("http://127.0.0.1:3000/api/topic",{cache:"no-store"});
  let topics = await callingTopics.json();
  return (
    <div className='flex flex-col'>
        <Link href='' className='bg-slate-200 text-black font-semibold font-sans text-xl p-4 hover:bg-slate-400'>Topics</Link>
        {
          topics.data.map((value, key) => (<Link href='' key={key} className='bg-slate-200 text-black font-sans text-lg px-4 py-2 hover:bg-slate-400'>{value.topic_title}</Link>))
        }
        

    </div>
  )
}

export default Side
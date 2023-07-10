"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const AdminContentCalling = ({contents}) => {
    const router = useRouter();
    const handleDelete =  async(id) => {
        let data = await fetch(`/api/content/single/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json()
        alert(data.msg);

        router.push("/admin/content");
    }
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
            id
            </th>
            <th scope="col" className="px-6 py-3">
                title
            </th>
            <th scope="col" className="px-6 py-3">
                content
            </th>
            <th scope="col" className="px-6 py-3">
                Author
            </th>
            <th scope="col" className="px-6 py-3">
                topic
            </th>
            <th scope="col" className="px-6 py-3">
                Views
            </th>
            <th scope="col" className="px-6 py-3">
                Status
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        {
            contents.map((value, key) => (
                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {key+1}
            </th>
            <td className="px-6 py-4">
                {value.content_title}
            </td>
            <td className="px-6 py-4 line-clamp-2">
                {value.content_text}
            </td>
            <td className="px-6 py-4">
                {value.author.name} 
            </td>
            <td className="px-6 py-4">
                {value.topic_id.topic_title}
            </td>
            <td className="px-6 py-4">
                {value.views}
            </td>
            <td className="px-6 py-4">
                {(value.status)? 
                <span className='bg-green-600 px-2 py-1 text-white rounded-full'>Live</span>:
                <span className='bg-red-600 px-2 py-1 text-white rounded-full'>Draft</span>
                }
            </td>
            <td className="px-6 py-4 flex gap-1">
                <button onClick={() => handleDelete(value._id)} className='bg-red-600 hover:bg-red-800 text-white px-3 py-2 rounded'>Delete</button>
                <Link href="" className='bg-sky-600 hover:bg-sky-800 text-white px-3 py-2 rounded'>Edit</Link>
                <Link href="" className='bg-teal-600 hover:bg-teal-800 text-white px-3 py-2 rounded'>View</Link>
            </td>
        </tr>
            ))
        }
      
    </tbody>
</table>
  )
}

export default AdminContentCalling
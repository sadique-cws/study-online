"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"

const AdminTopicCalling = ({callingTopic}) => {
    const router = useRouter();
    
    const handleDelete = async(id)=>{
        let data = await fetch(`/api/topic/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })

        router.push("/admin/topic");
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
                description
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        {
            callingTopic.data.map((value, key) => (
                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value._id}
            </th>
            <td className="px-6 py-4">
                {value.topic_title}
            </td>
            <td className="px-6 py-4">
                {value.description}
            </td>
            <td className="px-6 py-4 flex gap-1">
                <button onClick={() => handleDelete(value._id)}  className='bg-red-600 hover:bg-red-800 text-white px-3 py-2 rounded'>Delete</button>
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

export default AdminTopicCalling
"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const ContentForm = ({topics}) => {
    const router = useRouter()

    const [content_title,setContentTitle] = useState("");
    const [topic_id,setTopic_id] = useState("");
    const [author,setAuthor] = useState("64a38bc29a1907df2520520c");
    const [content_text,setContent_text] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = await fetch("/api/content",{
            method:"POST",
            body:JSON.stringify({content_title,content_text,author, topic_id,status:true,views:0}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json();
        router.push("/admin/content");
        

    }
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Insert Content</h5>
        <div>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" value={content_title} onChange={e => setContentTitle(e.target.value)} name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title here" required/>
        </div>
        <div>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
            <textarea rows="10" type="text" onChange={e => setContent_text(e.target.value)} name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title here" required>{content_text}</textarea>
        </div>
        <div>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <select value={topic_id} onChange={e => setTopic_id(e.target.value)} name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="title here">
                <option value="">Select Topic</option>
                    {topics.map((value, index) => (<option key={index} value={value._id}>{value.topic_title}</option>))}
            </select>
        </div>
       
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Topic Records</button>
        
    </form>
</div>
  )
}

export default ContentForm
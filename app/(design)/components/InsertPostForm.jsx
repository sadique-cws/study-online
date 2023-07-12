"use client"

import { useState } from "react"

const InsertPostForm = ({topics}) => {
    const [topic_id, setTopic_id] = useState("");
    const [content_title, setContentTitle] = useState("");
    const [content_text, setContentText] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit =  async(e) =>{
        e.preventDefault();

        let data = await fetch("/api/content",{
            method:"POST",
            body:JSON.stringify({topic_id, content_title, content_text,author}),
            header:{
                "Content-Type":"application/json"
            }
        })

        data = await data.json();

        alert((data.message) || (data.error));

    }
  return (
    <div className="bg-white border p-5">
                <h1>Insert Post Here</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="topic_id">Name</label>
                        <select className="border px-3 py-2" value={topic_id} onChange={(e) => setTopic_id(e.target.value)}>
                            <option>Select Topic</option>
                            {
                                topics.map((v, k) => (<option key={k} value={v._id}>{v.topic_title}</option>))
                            }
                        </select>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="ContentTitle">Content Title</label>
                        <input type="text" className="border px-3 py-2" placeholder='Enter post title' value={content_title} onChange={(e) => setContentTitle(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="content_text">content</label>
                        <textarea rows="5" type="text"className="border px-3 py-2" placeholder='Enter your ' onChange={(e) => setContentText(e.target.value)}>{content_text}</textarea>
                    </div>
                
                    <div className="mb-3 flex flex-col">
                        <input type="submit" value="Insert Post" className="bg-orange-600 text-white px-3 py-2 w-full" />
                    </div>
                </form>
            </div>
  )
}

export default InsertPostForm
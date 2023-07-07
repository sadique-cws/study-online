import Link from 'next/link'
import TopicForm from '../../components/TopicForm'
const page = async () => {
        return (
            <div className='flex'>
                <div className='w-5/12 mx-auto'>
                    <TopicForm/>
                </div>
            </div>
        )
}

export default page
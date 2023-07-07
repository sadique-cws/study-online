import ContentForm from '../../components/ContentForm'
const page = async () => {
    let callingTopic = await fetch("http://127.0.0.1:3000/api/topic");
    callingTopic = await callingTopic.json();
        return (
            <div className='flex'>
                <div className='w-7/12 mx-auto'>
                    <ContentForm topics={callingTopic.data}/>
                </div>
            </div>
        )
}

export default page
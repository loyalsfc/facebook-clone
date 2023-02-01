import React, { useEffect, useState } from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import db from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "post"))
            let datas = []
            querySnapshot.forEach((doc) => {
                datas.push({id: doc.id, data: doc.data() })
            });
            setPosts(datas)
        }

        fetchData()
        .catch(console.error)
    }, [])

    console.log(posts)

    return (
        <div className='flex-1 py-[30px] px-[150px] flex flex-col justify-center items-center '>
            <StoryReel />
            <MessageSender />
            {posts.map((post)=>{
                console.log(post)
                return <Post 
                    key={post.id}
                    profilePic = {post.data.profilepic}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            })}
            {/* <Post />
            <Post /> */}
        </div>
    )
}

export default Feed

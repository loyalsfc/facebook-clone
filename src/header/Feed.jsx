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
            // console.log(await getDocs(collection(db, "post")));
            const querySnapshot = await getDocs(collection(db, "post"))
            setPosts(querySnapshot.map((doc) => ({id: doc.id, data: doc.data() })))
            console.log(querySnapshot)
            // querySnapshot.forEach((doc) => {
            //     console.log(doc)
            //     console.log(doc.data())
            //     console.log(doc.id)
            //     console.log(`${doc.id} => ${doc.data()}`);
            // });
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
                return <Post 
                    profilePic = {post.profilePic}
                    image={post.image}
                    username={post.username}
                    timestamp={post.timestamp}
                    message={post.message}
                />
            })}
            {/* <Post />
            <Post /> */}
        </div>
    )
}

export default Feed

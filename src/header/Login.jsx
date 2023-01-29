import { Button } from '@mui/material'
import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../firebase'

function Login() {
    // const auth = getAuth();
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
        }).catch((error) => alert(error.message))
    }
    return (
        <div className='login grid h-screen place-content-center'>
            <div className='flex flex-col'>
                <img className='h-[150px] object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="" />
                <img className='h-[150px] object-contain' src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>    
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

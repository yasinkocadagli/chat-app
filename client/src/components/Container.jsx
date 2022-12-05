
import React, { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {useChat} from "../context/ChatContext" 
import {init,subsChat} from "../socketApi"

function Container() {
  const {setMessages} =useChat();

  useEffect(()=>{
    init()

    subsChat((message)=>{
      setMessages((prevState) =>[...prevState,{message}])
    })

  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container
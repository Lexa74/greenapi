import {getMessage, sendMessage} from "../services/api";
import {useEffect, useState} from "react";
import '../styles/chat.scss'

export const Chat = () => {
    const [text, setText] = useState('')
    const [responseMessages, setResponseMessages] = useState([])

    const submitHandler = () => {
        sendMessage(
            {
                chatId: `${localStorage.getItem('phone')}@c.us`,
                message: text
            }
        )
        console.log(localStorage.getItem('id'), localStorage.getItem('token'), localStorage.getItem('phone'))
    }

    useEffect(() => {
        setInterval(() => {
            getMessage().then((res) => {
                if(res !== null) {
                    console.log(res)
                    setResponseMessages([...responseMessages, res.body.messageData.textMessageData.textMessage])
                }
            })
        }, 10000)
    }, []);

    return (
        <>
            <textarea
                className={'send-message-form'}
                cols="30"
                rows="10"
                value={text}
                onChange={e => setText(e.target.value)}
            > </textarea>
            <button className={'send-message-btn'} onClick={submitHandler}>Send</button>
            <div className={'response-container'}>
                {responseMessages.map(message => `<p>${message}</p>`)}
            </div>
        </>
    )
}
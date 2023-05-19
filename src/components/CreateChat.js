import {useState} from "react";
import { Link } from "react-router-dom";
import '../styles/createChat.scss'

export const CreateChat = () => {
    const [phone, setPhone] = useState('')

    const sendHandlerPhone = () => {
        localStorage.setItem('phone', phone);
    }

    return (
        <div className={'wrapper'}>
            <input
                type="text"
                name={'phone'}
                placeholder={'Enter phone'}
                className={'input-phone'}
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <Link to={'/chat'} onClick={sendHandlerPhone} className={'create-chat-btn'}>New chat</Link>
        </div>
    )
}
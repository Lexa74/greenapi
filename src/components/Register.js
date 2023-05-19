import {useState} from "react";
import { Link } from "react-router-dom";
import '../styles/register.scss'

export const Register = () => {
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    const sendHandlerParamApi = () => {
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
    }

    return (
        <div className={'wrapper-register'}>
            <label htmlFor="id-instance">Id instance</label>
            <input
                className={'input-id'}
                type="text"
                id={'id-instance'}
                value={id}
                onChange={e => setId(e.target.value)}/>
            <label htmlFor="api-token">Api Token Instance</label>
            <input
                className={'input-token'}
                type="text"
                id={'api-token'}
                value={token}
                onChange={e => setToken(e.target.value)}
            />
            <Link to={'/createChat'} className={'send-param-api'} onClick={sendHandlerParamApi}>Send</Link>
        </div>
    )
}
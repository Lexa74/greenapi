import axios from 'axios'

const URL = ' https://api.green-api.com'

export const sendMessage = (body) => {
    axios.post(`${URL}/waInstance${localStorage.getItem('id')}/SendMessage/${localStorage.getItem('token')}`, body)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getMessage = () => {
    return axios.get(`${URL}/waInstance${localStorage.getItem('id')}/ReceiveNotification/${localStorage.getItem('token')}`)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}
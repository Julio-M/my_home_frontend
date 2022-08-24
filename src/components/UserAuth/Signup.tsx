import { useState } from 'react'
import { UserAuth } from './model'

const defaultState = {
    username: '',
    password: '',
    passwordconfirm: ''
}

const Signup: React.FC = () => {
    const [toggleShowPassword, setTogglePassword] = useState<boolean>(true);
    const [formData, setFormData] = useState<UserAuth>(defaultState)
    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleClick() {
        setTogglePassword(!toggleShowPassword)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={handleChange} name='username' placeholder='Enter your username' value={formData.username}></input>
            <label>Password</label>
            <input onChange={handleChange} name='password' placeholder='Enter your password' type={toggleShowPassword ? "password" : "null"} value={formData.password}></input>
            <button onClick={handleClick}> Show password</button>
            <input onChange={handleChange} name='passwordconfirm' placeholder='Enter your password' type={toggleShowPassword ? "password" : "null"} value={formData.passwordconfirm}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signup
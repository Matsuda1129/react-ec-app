import React, {useState} from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {TextInput, PrimaryButton} from '../components/UIkit';
import { signUp } from '../reducks/users/operations';
import { push } from 'connected-react-router';


const SignUp = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    },[setUsername])
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail])
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    },[setPassword])
    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    },[setConfirmPassword])
    return (
        <div className="c-section-container">
            <h2 className="u-text_headline u=text-center">アカウント登録</h2>
            <div className="module-spacer--medium"/>
            <TextInput
            fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
            rows={1} value={username} type={"text"} onChange={inputUsername}
            />
            <TextInput
            fullWidth={true} label={"email"} multiline={false} required={true}
            rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
            fullWidth={true} label={"password"} multiline={false} required={true}
            rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <TextInput
            fullWidth={true} label={"confrim password"} multiline={false} required={true}
            rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
            />
            <div className='center'>
            <div className="module-spacer--medium"/>
                <PrimaryButton
                    label ={"make account"}
                    onClick= {() => dispatch(signUp(username, email, password, confirmPassword))}
                    />
                    
            <p onClick={() => dispatch(push('/signin'))}>ログインする</p>

            </div>
        </div>
    )
}

export default SignUp
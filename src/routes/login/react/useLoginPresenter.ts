import { useState } from "react";
import LoginPresenter from "../presenters/LoginPresenter";

export default function useLoginPresenter(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    return LoginPresenter({username, setUsername, password, setPassword});
}
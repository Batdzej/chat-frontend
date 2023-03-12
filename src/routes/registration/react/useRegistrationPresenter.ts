import { useState } from "react";
import RegistrationPresenter from "../presenters/RegistrationPresenter";

export default function useRegistrationPresenter(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    return RegistrationPresenter({username, setUsername, password, setPassword, repeatPassword, setRepeatPassword});
}
import React from "react"

export default function LoginPresenter({
    username,
    setUsername,
    password,
    setPassword
}:{
    username:string,
    setUsername:(value:string) => void,
    password:string,
    setPassword:(value:string) => void
}){
    return{
        getUsernameValue(){
            return username
        },
        onUsernameChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
            setUsername(e.target.value)
        },
        getUsernameLabel(){
            return 'Username'
        },
        getPasswordValue(){
            return password
        },
        onPasswordChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
            setPassword(e.target.value)
        },
        getPasswordLabel(){
            return 'Password'
        },
        onButtonClick(){
            console.log(username, password)
        },
        getButtonLabel(){
            return 'Log in'
        },
        getRegistrationLink(){
            return '/registration'
        },
        getRegistrationLabel(){
            return 'register'
        }
    }
}
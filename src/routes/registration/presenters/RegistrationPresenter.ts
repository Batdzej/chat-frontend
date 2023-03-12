import React from "react"

export default function RegistrationPresenter({
    username,
    setUsername,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword
}:{
    username:string,
    setUsername:(value:string) => void,
    password:string,
    setPassword:(value:string) => void,
    repeatPassword:string,
    setRepeatPassword:(value:string) => void
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
        getRepeatPasswordValue(){
            return repeatPassword
        },
        onRepeatPasswordChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
            setRepeatPassword(e.target.value)
        },
        getRepeatPasswordLabel(){
            return 'Repeatpassword'
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
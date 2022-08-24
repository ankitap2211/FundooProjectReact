//this is for login and signup

//axios it is liabrary through this we can communicate with server

import axios from 'axios';

export const login = (loginObj)=>{
    //here we provide login url
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
    
    return response
    console.log("login process")
} 

export const signUp = (signupObj) =>{

    let result = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", signupObj)

    return result
    console.log("register processing")
}
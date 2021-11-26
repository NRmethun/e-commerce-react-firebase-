import React from 'react'
import './Login.css'
import {auth} from "../Firebase/firebase" ;
import {Link,useHistory} from 'react-router-dom' ;
import { useState } from 'react';
function Login() {
    
    const history =useHistory() ;
    const [email,setEmail] =useState('') ;
    const [password,setPassword] =useState('') ;
    const login =(e) =>
    {
        e.preventDefault() ;
        // login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=> {
            //logged in redirect to homepage
            history.push('/') ;

        } ).catch((e)=> alert((e.message))) ;
        
        
    }
    const register =(e) =>
    {
        e.preventDefault() ;
        // do the register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //create a user and looged in ...redirect to homepage
        }).catch((e)=> alert(e.message) ) ;
    }
    return (
        <div className="login"> 
            
            <Link to="/" >
                <img 
                  className="login__logo" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" 
                  alt="not found"
                />
            </Link> 

            <div className="login__conatainer">
                <h1> Sign in</h1> 
                <form>
                    <h5>E-mail</h5> 
                    <input type="email" value={email} 
                      onChange={e=> setEmail(e.target.value)}
                    />
                    <h5>Password </h5>
                    <input type="password" value={password} 
                      onChange={e=> setPassword(e.target.value)}
                    /> 
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>  
                </form>
                <p> 
                    Some term and policy
                </p> 
                <button onClick={register} className="login__registerButton" > create your Amazon Account</button>

            </div>
            
        </div>
    )
}

export default Login

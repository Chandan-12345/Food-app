import "./Login.css"



import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { loginUser } from "../../Redux/actions/main";
import { useDispatch } from "react-redux";
 
const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
              //  updateProfile(user, {
                    //   displayName: name,
                    // });
            navigate("/")
            console.log(user, "localuser");
            // localStorage.setItem('user', JSON.stringify(user));
            dispatch(loginUser('LOGIN'))

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        props.closebtn(false)
    }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button  className="loginbtn"                                 
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div> 
                            <div>New To Zwigato ? 
                            <span className="signuppopup" onClick={props.showbtn} > Create Account</span></div>  
                                </form>
                       
                      
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login
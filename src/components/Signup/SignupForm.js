import React, { useState } from "react";
import {  createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase"
import "./Signup.css";

const SignupForm = (props) => {
  console.log(props, "props");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setIsButtonDisabled(!event.target.checked);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user,"<<>>><<<>>");
            navigate("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    if (Object.keys(validationErrors).length === 0) {
   console.log("form Submitted");
    } else {
      setErrors(validationErrors);
    }
    props.onButtonClick(false)
  };

  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  return (
    <>
      <div className="popup">
        <div className="popHeader"></div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="formBasicChecbox">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <label for="vehicle1">
              I agree to Chromato's{" "}
              <span className="termsConditions">Terms of Service,</span>{" "}
              <span className="termsConditions">Privacy Policy</span> and{" "}
              <span className="termsConditions">Content Policies</span>
            </label>
            <br></br>
          </div>
          <button
            style={{
              backgroundColor: isButtonDisabled ? "lightgrey" : "#FF4742",
            }}
            disabled={isButtonDisabled}
            type="submit"
            className="createAccount"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;



// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import {auth} from "../../firebase"
 
// const SignupForm = () => {
//     const navigate = useNavigate();
 
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
 
//     const onSubmit = async (e) => {
//       e.preventDefault()
     
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
 
   
//     }
 
//   return (
//     <main >        
//         <section>
//             <div>
//                 <div>                  
//                     <h1> FocusApp </h1>                                                                            
//                     <form>                                                                                            
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
//                         </div>                                             
                        
//                         <button
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>
                                                                     
//                     </form>
                   
//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }
 
// export default SignupForm
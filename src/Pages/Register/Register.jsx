import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {

    const {createUser,signInwithGoogle,profileUpdate }=useAuth()

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    const minLengthRegex = /^.{6,}$/;

    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl =e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const profile ={displayName: name, photoURL: photoUrl}
        console.log(profile);


        if(!uppercaseRegex.test(password)){

            setError('Password must contain atlest one uppercase')
            return;
        }
        else if(!lowercaseRegex.test(password)){

            setError('Password must contain atlest one lowercase')
            return;
        }
        else if(!minLengthRegex.test(password)){

            setError('Password minimum length will be 6 character')
            return;
        }
        else{
            setError('')
        }

        createUser(email,password)
        .then(result=>{
            if(result.user){
              toast('Registration successful')
              profileUpdate(result.user,profile)
              .then(()=>{
                navigate(location.state||'/')
              })
              .catch(error=>{
                console.log(error);
              })
            }
            }
        )
        .catch(error=>{
            setError(error)
            toast('Registration Failed');
        }

        )

    }
    const handleGoogleSignIn=()=>{
        signInwithGoogle()
        .then(result=>{
            if(result.user){
              navigate(location.state||'/')
              toast('Sign in successful')

            }
            }
        )
        .catch(error=>{
            if(error){
            toast('Failed to sign in');
            }
        }

        )
}
  return (
    <>
    <h1 className="text-center font-bold text-4xl my-5">Register Now!</h1>
    <div className="mx-auto mb-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Enter Your Name" required
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            name="photoUrl"
            placeholder="Enter Your PhotoURL" required
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email" required
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password" required
          />
          <div>
            <p className="text-red-500">{error}</p>
          </div>
          <button className="btn bg-amber-100 dark:bg-gray-500 mt-4">Register</button>


        </fieldset>
        </form>
        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-center">
            Already have an account?{" "}
            <Link to='/login' className="text-blue-500 underline">Login here</Link>
          </p>
      </div>
    </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";

const Login = ({handleLogin}) => {


  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");





const sumbitHandle= (e)=>{
 e.preventDefault();
handleLogin(email , password)
setEmail ("")
setPassword ("")

}


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
         onSubmit={(e)=>{
          sumbitHandle(e)
         }}
         className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
            className="border-2 rounded-full border-emerald-600 py-4 px-5 outline-none bg-transparent 
            placeholder:text-gray-500  "
            type="email"
            placeholder=" Enter Email"
          />
          <input 
          value={password}
          onChange={(e)=>{
                setPassword(e.target.value)
          }}required
            className="border-2 rounded-full border-emerald-600 py-4 px-5  outline-none bg-transparent mt-3
            placeholder:text-gray-500 "
            type="password"
            placeholder="Enter Password"
          />
          <button  className=" mt-5 border-none rounded-full bg-emerald-600 py-4 px-5 text-white outline-none  
            placeholder:text-white ">Log In </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

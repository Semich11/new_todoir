import React from "react";
import axios  from "axios";

import { MdOutlineRemoveRedEye } from "react-icons/md";

const Register = () => {
  const [form,setForm] = useState({email:"",username:"",password:""}) 
  const handleRegister = async()=>{
    try{
      const response = await axios.post("",form)

    }catch(error){
      console.error(error)
    }
      
  }
  return (
    <div className="bg-gray-50 px-6 min-h-screen p-4  flex items-center justify-center">
      <div className="bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl  items-center p-4 flex-row-reverse">
        <div className="md:w-2/4 mb-2 p-3 rounded-2xl items-center px-16 ">
          <h2 class="font-bold text-2xl text-[#002074]  ">Signup</h2>

          <form action="" className="flex flex-col gap-4 ">
            <input
              className="p-2 mt-8 border rounded-xl"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            /> 

            <div className="relative">
              <input
                className="w-full p-2 rounded-xl border"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />

              <MdOutlineRemoveRedEye className="absolute top-[30%] right-3 text-gray-400" />
            </div>

            <button onClick={handleRegister} className="bg-[#002074] text-white rounded-lg hover:scale-110 duration-300 py-2">
              Register
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p className="w-[60%]">If you are already a member, easily log in </p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 ">
            <a href="/login">Login</a>
            </button>
          </div>

        </div>

        <div className="md:block hidden  w-2/4 ">
          <img
            className="rounded-2xl"
            src="/images/login-side.jpg"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Register;

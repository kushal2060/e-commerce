'use client'
import Link from "next/link";
// import "./login.css"
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
export default function Login() {
 
  
    const { login } = useAuth();  // Get login function from AuthContext
    const auth = useAuth();  // Check if context works
    console.log("Auth Context:", auth);
      const [formData, setFormData] = useState({
          username_or_email: '',
          password: '',
        });
  
        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');
  
        // Handle form field changes
        const handleChange = (e) => {
          const { name, value } = e.target;
          console.log(`Updating field: ${name}, Value: ${value}`); // Debugging log
        
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
        
        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("Form Data Before Sending:", formData);  
          try {
            const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData), // Ensure keys match backend parameters
            });
  
            const data = await response.json();
            console.log("Backend Response:", data); 
        if (response.ok) {
          login(data.user); // Use login function from AuthContext
          setSuccess('Login successful!');
          setError('');
          window.location.href = '/';
          // window.location.reload();
      } else {
          setError(data?.error || 'Login failed.');
          setSuccess('');
      }
  } catch (error) {
    setError(`Error connecting to the server: ${error.message}`);
  }
  
  };    
    return(
        // kushal ko login 
    <div className="mt-32">
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
       <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mt-16">
        <h1 className="font-bold text-3xl font-sans text-gray-900 mb-2">LOGIN</h1>
        
         <div className="flex flex-col w-[420px] mt-5">
       
       <label className="text-sm font-medium text-gray-700">Email</label>
       <input
         type="text"
         name="username_or_email"
         className="w-full h-12 border border-gray-300 px-3 mt-2"
          placeholder="Email"
          onChange={handleChange}
          value={formData.username_or_email}
       />
     </div>
     <div className="flex flex-col w-[420px] mt-5">
       <label className="text-sm font-medium text-gray-700">Password</label>
       <input
         type="password"
         name="password"
         value={formData.password} 
         onChange={handleChange}
         className="w-full h-12 border border-gray-300 px-3 mt-2 text-xs"
          
       />
     </div>
     <div className="flex justify-between items-center w-[420px] mt-5">
       <button className="bg-orange-600 text-white w-[110px] h-[43px] border border-solid border-transparent hover:bg-gray-900"
       type="submit">
         Sign in
       </button>
       <Link  
         href="/signup"
         className="text-sm underline text-gray-700 hover:text-gray-900"
       >
         Create Account
      </Link>
     </div>
   </div>
     {/* maile add gareko components */}
   <div className="flex justify-between mt-24 ml-12 mb-12 mr-20">
     <div>
         <Image src="/images/loginimg.png" alt="Example image" width={700} height={0} className="rounded-md w-[700px] h-[700px] object-contain " />
         </div>
         <div className="flex justify-center items-center flex-col">
             <div className="flex">
                 <p className="font-light text-3xl mr-3">WHY</p>
                 <p className="font-bold text-3xl">CREATE AN ACCOUNT?</p>
             </div>
             <p className="mt-5">Because you can view all your past orders, profile information, & saved addresses.</p>
             <p className="mt-5">When you log in, the details stored in the account are auto-filled during checkout</p>
             <p>for a faster checkout experience!</p>
             <p className="mt-5 font-semibold">No more missing drops and merch selling out before you can check out!</p>
         </div>
   </div>
         </form>
        
    </div>
      
    );
}
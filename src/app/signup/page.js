"use client"
import "../login/login.css"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup(){
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [   setError] = useState('');
  const [  fieldErrors,setFieldErrors] = useState({}); // To track field-specific errors
  const [success, setSuccess] = useState('');
  const [generalError, setGeneralError] = useState(''); // For general backend errors
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

     

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful!');
        setFieldErrors({});
        setFormData({
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          confirm_password: '',
        });
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setGeneralError('');
        // Map backend errors to fieldErrors state
        if (data) {
          const newFieldErrors = {};
          for (const key in data) {
            if (Array.isArray(data[key])) {
              newFieldErrors[key] = data[key][0]; // Assuming errors are returned as an array
            }
          }
          setFieldErrors(newFieldErrors);
        }
      }
    } catch (error) {
      setError(`Error connecting to the server: ${error.message}`);
    }
  };
    return(
        <div className="flex flex-col items-center my-28">
        <h1 className="font-bold text-3xl font-sans text-gray-900 mb-2">
          CREATE ACCOUNT
        </h1>
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {generalError && <p style={{ color: 'red' }}>{generalError}</p>}
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="firstName" className="text-sm text-gray-700">First Name</label>
          <input
            id="firstName"
            type="text"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            onChange={handleChange}
             value={formData.first_name}
            name="first_name"
            placeholder="Enter your first name"
          />
          {fieldErrors.first_name && <p style={{ color: 'red' }}>{fieldErrors.first_name}</p>}
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="lastName" className="text-sm text-gray-700">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            name="last_name"
            onChange={handleChange}
            value={formData.last_name}
            placeholder="Enter your last name"
          />
          {fieldErrors.last_name && <p style={{ color: 'red' }}>{fieldErrors.last_name}</p>}
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="lastName" className="text-sm text-gray-700">Username</label>
          <input
            id="UserName"
            type="text"
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="Enter your username"
          />
          {fieldErrors.username && <p style={{ color: 'red' }}>{fieldErrors.username}</p>}
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="email" className="text-sm text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            placeholder="Enter your email address"
          />
          {fieldErrors.email && <p style={{ color: 'red' }}>{fieldErrors.email}</p>}
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="password" className="text-sm text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password }
            name="password"
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            placeholder="Enter your password"
          />
          {fieldErrors. password && <p style={{ color: 'red' }}>{fieldErrors.password}</p>}
        </div>
        <div className="flex flex-col w-[420px] mt-5">
          <label htmlFor="password" className="text-sm text-gray-700">Confirm Password</label>
          <input
            
            type="password"
            value={formData.confirm_password}
            name="confirm_password"
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 px-3 mt-2"
            placeholder="Enter your password"
          />
          {fieldErrors.confirm_password  && <p style={{ color: 'red' }}>{fieldErrors.confirm_password}</p>}
        </div>
        <div className="flex justify-between items-center w-[420px] mt-5">
          <button className="bg-orange-600 text-white w-[110px] h-[43px] border border-solid border-transparent hover:bg-gray-900" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
      
    );
}
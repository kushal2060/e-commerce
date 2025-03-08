"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


// import { useEffect, useState } from "react";
import Link from "next/link";
// import { profile } from "console";

const Profile = () => {
  const { user , logout, isAuthenticated } = useAuth();
  const router=useRouter();
  const handleLogout=()=>{
    logout();
    setTimeout(() => {
      window.location.href = "/"; // Forces a full reload
    }, 500);
  }
  if (!user) return <p className="text-2xl mt-40 mb-40 text-center font-bold text-black flex justify-center items-center gap-2">
  Loading
  <span
    className="inline-block w-2 h-4 bg-black rounded-full"
    style={{ animation: "dotPulse 1s infinite", animationDelay: "0.5s" }}
  ></span>
  <span
    className="inline-block w-2 h-4 bg-slate-600 rounded-full"
    style={{ animation: "dotPulse 1s infinite", animationDelay: "0s" }}
  ></span>
  <span
    className="inline-block w-2 h-4 bg-slate-400 rounded-full"
    style={{ animation: "dotPulse 1s infinite", animationDelay: "0.25s" }}
  ></span>
  <style jsx>{`
    @keyframes dotPulse {
      0%, 80%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      40% {
        opacity: 1;
        transform: scale(1.5);
      }
    }
  `}</style>
</p>

 

  return (
    <section>
      <div className="mt-32 ml-10 mr-10">
        <div className="flex justify-between">
          <p>
            <Link href="/" className="underline">
              Return to Store
            </Link>
          </p>
          <p className="font-bold text-3xl">MY ACCOUNT</p>
          <button onClick={handleLogout} className="underline">Logout</button>
        </div>
        <div className="flex mt-32 gap-96">
          <div>
             {isAuthenticated ? (
                <> <p className="font-bold text-xl mb-4">
              Welcome, {user?.username} 
            </p>
            <p>Email: {user?.email}</p>
            <p className="mt-2">Nepal</p>
            <p className="underline">View Address (1)</p>
                </>
             ) : (
                <p>You are not logged in.</p>
             )}
           
          </div>
          <div className="ml-24 mt-10">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
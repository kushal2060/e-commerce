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
    router.push("/");
  }
  if (!user) return <p>Loading...</p>

 

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
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="flex mt-32 gap-96">
          <div>
             {isAuthenticated ? (
                <> <p className="font-bold text-xl mb-4">
              Welcome, {user?.username} 
            </p>
            <p>Email :{user?.email}</p>
            <p className="mt-2">Nepal</p>
            <p className="underline">View Address (1)</p>
                </>
             ) : (
                <p>You are not logged in.</p>
             )}
           
          </div>
          <div className="ml-24 mt-10">
            <p> You haven&apos;t placed any orders yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
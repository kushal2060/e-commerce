'use client'
import { useRouter } from "next/navigation";
 
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

const ProfileIcon = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth(); // Check if the user is logged in
  console.log("Profile Button: isAuthenticated?", isAuthenticated); // Debugging
 


  const handleProfileClick = () => {
    if (isAuthenticated) {
      router.push("./profile"); // Redirect to the profile page
    } else {
      router.push("./login"); // Redirect to the login page
    }
  };

  return (
    <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
      <Image src="/images/usber.svg"  alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px]"/>
    </div>
  );
};

export default  ProfileIcon;
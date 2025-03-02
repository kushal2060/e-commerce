import Image from "next/image"
import Link from "next/link"
import ProfileIcon from "./profilebuttom"
const Header = () => {
    return (
        
      <div className="fixed mb-5 mt-2  top-0 z-40 "> 
        
        <section>
              <div className="flex justify-between bg-white h-11 items-center  rounded-md ml-7 mr-8 top-0  w-[1425px]  shadow-md">
                <div className="ml-6">
                  <Link href="/"><Image src="/images/kbc.png" alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px] " /></Link>
                </div>
                <div className="">
                <button className= "hover:bg-gray-100   h-7 w-20 text-xs rounded-md"><a href="">CATEGORY</a></button>
                <button className= "hover:bg-gray-100   h-7 w-24 text-xs rounded-md"><a href="">SUPPLEMENTS</a></button>
                 <button className="hover:bg-gray-100  h-7 w-20 text-xs rounded-md"><a href="">APPARAL</a></button>
                 <button className="hover:bg-gray-100  h-7 w-24 text-xs rounded-md"><a href="">ENDURANCE</a></button>
                 <button className="hover:bg-gray-100  h-7 w-20 text-xs rounded-md"><a href="">LEARN</a></button>
                </div>
                <div className=" flex justify-end gap-2 mr-6">
                  <ProfileIcon/>
                  <a href=""><Image src="/images/find.svg" alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px] " /></a>
                  <a href=""><Image src="/images/shop.svg" alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px] " /></a>
                </div>
              </div>
              </section> 
      </div>
              )}
              export default Header 
              
"use client"
import Image from "next/image"
import Link from "next/link"
import ProfileIcon from "./profilebuttom"
import { useCart } from "../context/cartContext"
const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return (
        
      <div className="fixed mb-5 mt-2  top-0 z-40 "> 
        
        <section>
              <div className="flex justify-between bg-white h-11 items-center  rounded-md ml-7 mr-8 top-0  w-[1425px]  shadow-md">
                <div className="ml-6">
                  <Link href="/"><Image src="/images/kbc.png" alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px] " /></Link>
                </div>
                <div className="">
                <button className= "hover:bg-gray-100   h-7 w-20 text-xs rounded-md"><a href="/category">CATEGORY</a></button>
                <button className= "hover:bg-gray-100   h-7 w-24 text-xs rounded-md"><a href="/supplements">SUPPLEMENTS</a></button>
                 <button className="hover:bg-gray-100  h-7 w-20 text-xs rounded-md"><a href="/apperal">APPARAL</a></button>
                 <button className="hover:bg-gray-100  h-7 w-24 text-xs rounded-md"><a href="">ENDURANCE</a></button>
                 <button className="hover:bg-gray-100  h-7 w-20 text-xs rounded-md"><a href="/learn">LEARN</a></button>
                </div>
                <div className=" flex justify-end gap-2 mr-6">
                  <ProfileIcon/>
                  <a href=""><Image src="/images/find.svg" alt="Example image" width={335} height={470} className="rounded-md w-[30px] h-[30px] " /></a>
                  <Link href="/cart" className="relative">
               
                <Image 
                  src="/images/shop.svg" // Replace with your cart icon path
                  alt="Cart"
                  width={335}
                  height={470}
                  className="rounded-md w-[30px] h-[30px]"
                />
                 {/* If there are items in the cart, show the badge */}
                 {totalItems > 0 && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </div>
                )}
               
            </Link>
                </div>
                
              </div>
              </section> 
      </div>
              )}
              export default Header 
              
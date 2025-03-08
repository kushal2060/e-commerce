// components/ProductListing.js
"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";


type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    description?: string; // Optional property
    sizes: string[]; 
  };
  
  const products: Product[] = [
    {
      id: 1,
      name: "Summit Hoodie",
      image: "/images/aimg/ba.webp",
      price:  5499,
      description: "Premium Apparel",
      sizes: ["Small", "Medium", "Large"],
       
    },
    {
      id: 2,
      name: "Summit Sweatpants",
      image: "/images/aimg/bb.webp",
      price:  2899,
      description: "Premium Apperel",
      sizes: ["Small", "Medium", "Large"],
    },
    {
      id: 3,
      name: "Cloud Nine Long Sleeve",
      image: "/images/aimg/bc.webp",
      price:  3299,
      description: "Premium Apperel",
      sizes: ["Small", "Medium", "Large"],
    },
    {
        id: 4,
        name: "Aspen T-Shirt",
        image: "/images/aimg/bd.webp",
        price:  2699,
        description: "Premium Apperel",
        sizes: ["Small", "Medium", "Large"],
         
      },
      {
        id: 5,
        name: "Stamp T-Shirt",
        image: "/images/aimg/be.webp",
        price:  3499,
        description: "Premium Apperel",
        sizes: ["Small", "Medium", "Large"],
      },
      {
        id: 6,
        name: "Black Diamond Hat",
        image: "/images/aimg/bf.webp",
        price:  1799,
        description: "Premium Apperel",
        sizes: ["Small", "Medium", "Large"],
      },
      {
        id: 7,
        name: "RAW Duffle",
        image: "/images/aimg/bg.webp",
        price:  6499,
        description: "Durable Quality Meets Luxury",
        sizes: ["Small", "Medium", "Large"],
      },
    
      {
        id: 8,
        name: "RAW Mug",
        image: "/images/aimg/bh.webp",
        price:  999,
        description: "Premium Apperel",
        sizes: ["Small", "Medium", "Large"],
      },
     
  ];



const ProductListing = () => {

    const router = useRouter();
    
       const handleProductClick = (product: Product) => {
      router.push(
        `/buy?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description || "")}&sizes=${encodeURIComponent(product.sizes.join(","))}`
        
      );
    };

  return (
    <section>
         <p className='mt-52 text-center font-extrabold text-6xl mb-32'> RAW APPAREL & <br />ACCESSORIES</p>
            <div className='flex gap-8 ml-10 mr-5 mb-32'>
        
        <div className=' justify-center gap-10 mt-20'>
  
 
  <div className="text-center flex gap-10 flex-wrap">

     {products.map((product) => (
            <div
              key={product.id}
              className="text-center cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={320}
                className="rounded-md w-[320px] h-[320px] object-cover mb-5"
              />
              <p className="font-semibold">{product.name}</p>
              <p className="text-xs font-thin">{product.description}</p>
              <p>RS.{product.price}</p>
              <button className="bg-black hover:bg-slate-800 h-10 w-[300px] border-t border-l border-b border-r border-black text-white hover:text-white mt-10 mb-5"  onClick={() => handleProductClick(product)}>Add to Cart</button>
            </div>
            ))}

  </div>
  </div>
 
   </div>
  
    </section>

   


  );
};

export default ProductListing;
// components/ProductListing.js
"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


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
      name: "Essential Pre-Workout",
      image: "/images/simg/ac.webp",
      price:  2699,
      description: "All-in-one Pre",
      sizes: ["Small", "Medium", "Large"],
       
    },
    {
      id: 2,
      name: "CBUM Itholate Protein",
      image: "/images/simg/ad.webp",
      price:  2899,
      description: "Cbum Signature Series",
      sizes: ["Small", "Medium", "Large"],
    },
    {
      id: 3,
      name: "Raw Replenish",
      image: "/images/cbum.webp",
      price:  2599,
      description: "Electrolyte Formula",
      sizes: ["30 Serving", "100 Serving"],
    },
    {
        id: 4,
        name: "Protein Isolate RTD",
        image: "/images/simg/ae.webp",
        price:  2699,
        description: "Ready to Drink Protein",
        sizes: ["Small", "Medium", "Large"],
         
      },
      {
        id: 5,
        name: "VEGAN PROTEIN",
        image: "/images/simg/af.webp",
        price:  5499,
        description: "100% Plant Based Protein",
        sizes: ["30 Serving", "100 Serving"],
      },
      {
        id: 6,
        name: "Christopher's Juicy Pumps",
        image: "/images/simg/ag.webp",
        price:  2799,
        description: "Improve Blood Flow",
        sizes: ["30 Serving", "100 Serving"],
      },
      {
        id: 7,
        name: "EAA Plus",
        image: "/images/simg/aa.webp",
        price:  3499,
        description: "Recover Better and Quicker",
        sizes: ["30 Serving", "100 Serving"],
      },
    
      {
        id: 8,
        name: "Thuper Thavage Pre-Workout",
        image: "/images/simg/ab.webp",
        price:  5999,
        description: "The New Standard",
        sizes: ["30 Serving", "100 Serving"],
      },
     
  ];



const ProductListing = () => {
    useEffect(() => {
        document.body.classList.add('vsc-initialized');
      }, []);

    const router = useRouter();
    
       const handleProductClick = (product: Product) => {
      router.push(
        `/buy?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description || "")}&sizes=${encodeURIComponent(product.sizes.join(","))}`
        
      );
    };

  return (
    <section>
         <p className='mt-52 text-center font-extrabold text-6xl mb-32'> RAW SUPPLEMENTS</p>
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
                className="rounded-md w-[320px] h-[320px] object-cover"
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
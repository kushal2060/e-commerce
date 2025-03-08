"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
 
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';



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
    name: "Endurance Sunglasses",
    image: "/images/rawglasses.webp",
    price:  2699,
    description: "Sleek and Ergonomic Design",
    sizes: ["Small", "Medium", "Large"],
     
  },
  {
    id: 2,
    name: "RAW Fly Elite Sport Bottle",
    image: "/images/rawbottle.webp",
    price:  2899,
    description: "Long and Hard",
    sizes: ["500ml", "750ml", "1L"],
  },
  {
    id: 3,
    name: "Raw Replenish",
    image: "/images/cbum.webp",
    price:  2599,
    description: "Electrolyte Formula",
    sizes: ["30 Serving", "100 Serving"],
  },
];

 


const khalti = async ( ) => {
  let token = localStorage.getItem("access_token");

  if (!token) {
    alert("You need to log in")
    
    return;
  }
  
  try {
    const response = await fetch("http://127.0.0.1:8000/api/users/khalti/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        public_key: "pk_live_2ca114cf1bc647c191ae6e7642fdcfbd",
        amount:   579900, // Amount in paisa (10 NPR = 1000 paisa)
       
       
      }),
    });

    const data = await response.json();
    
    if (data.payment_url) {
      window.location.href = data.payment_url; // Open the payment URL in a same tab
    } else {
      console.error("Payment URL not received");
    }
  } catch (error) {
    console.error("Error initiating payment:", error);
  }

  
};
 
export default function Home() {
  const router = useRouter();

   const handleProductClick = (product: Product) => {
  router.push(
    `/buy?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description || "")}&sizes=${encodeURIComponent(product.sizes.join(","))}`
    
  );
}; 
const ItholateProductClick = () => {
  router.push(
    `/buy?name=${encodeURIComponent("FROTH-TED HOT COCOA ITHOLATE PROTEIN")}&price=5799&image=${encodeURIComponent("/images/pinky.png")}&description=${encodeURIComponent("Froth-Ted Hot Cocoa Itholate Protein is a delicious and nutritious protein powder designed for those who want to fuel their body while satisfying their cravings.")}&sizes=${encodeURIComponent("30 Serving, 100 Serving")}`
    
  );
};

  return (

    
     <main>

      {/* hero section  */}
      <section>
      <div className="relative  ml-5 mr-5 ">
        <a href=""><Image src="/images/suru.png" alt="Example image" width={1500} height={0} className="rounded-md w-[1500px] h-[600px] object-cover" /></a>
        <div className="absolute ml-16 top-60">
           <p className="mt-8 mb-5 text-sm font-normal text-white">TRUSTED BY PROFESSIONAL ATHELETES</p>
        <p className="font-bold text-white text-7xl ">PREMIUM</p>
        <p className="mb-8 font-light text-white text-7xl">SUPPLIMENTS</p>
        <Link href={"/supplements"}><button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW </button></Link> 

        </div>
        </div>
      </section>
      {/* we are build from the ground up  */}
<section className="flex gap-5">
        <p className="flex gap-10 my-10 ml-5 font-light text-transparent text-7xl bg-clip-text bg-gradient-to-r from-gray-400 via-gray-900 to-black">WE ARE</p>
        <p className="my-10 font-bold text-black text-7xl">BUILD FROM THE GROUND UP</p>
      </section>





      {/* merch big small box 1  */}
      <section>
      <div className="relative flex mr-5">
     <div className="mb-5 ml-5 ">
        <Image src="/images/tshirt.png" alt="Example image" width={850} height={0} className="rounded-md w-[850px] h-[460px] object-cover " />
        <div className="absolute top-64 left max-w-60 ml-7">
           <p className="mt-8 mb-5 text-sm font-normal text-white">BLACK FRIDAY MERCH</p>
        <p className="mb-5 text-3xl font-bold text-white">NEW MERCH</p>
        <Link href={"/apperal"}><button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW </button></Link> 
        </div>
        </div>
        <div className="mb-5 ml-5">
        <Image src="/images/hoka.png" alt="Example image" width={570} height={0} className="rounded-md w-[570px] h-[460px] object-cover " />
        <div className="absolute top-64 left max-w-60 ml-7">
           <p className="mt-8 mb-5 text-sm font-normal text-white">SPORT THE LOOK</p>
        <p className="mb-5 text-3xl font-bold text-white">SHOES</p>
        <Link href={"/apperal"}><button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW </button></Link> 
        
        </div>
        </div>
     </div>
     <div className="relative flex mr-5">
     <div className="mb-5 ml-5">
        <Image src="/images/pretin.png" alt="Example image" width={850} height={0} className="rounded-md w-[850px] h-[460px] object-cover " />
        <div className="absolute top-64 left ml-7">
           <p className="mt-8 mb-5 text-sm font-normal text-white">THO GOOD IT HURTS</p>
        <p className="mb-5 text-3xl font-bold text-white">NEW ITHOLATE PROTEIN</p>
        <Link href={"/supplements"}><button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW </button></Link> 
        </div>
        </div>
        <div className="mb-5 ml-5">
        <Image src="/images/thuper.png" alt="Example image" width={570} height={470} className="rounded-md w-[570px] h-[460px] object-cover " />
        <div className="absolute top-64 left ml-7">
           <p className="mt-8 mb-5 text-sm font-normal text-white">BE A THAVAGE</p>
        <p className="mb-5 text-3xl font-bold text-white">NEW THAVAGE PRE-WORKOUT</p>
        <Link href={"/supplements"}><button className="w-40 h-12 font-normal text-white bg-orange-700 hover:bg-black">SHOP NOW </button></Link> 

        </div>
        </div>
     </div>
      </section>
      {/* add to cart and paypal */}
      <section>
        <div className="bg-zinc-100 mx-5 flex justify-center items-center gap-28 relative h-[550px]">
        <div>
        <Image src="/images/pinky.png" alt="Example image" width={350} height={0} className="w-[350px] h-[450px] object-cover " />
        </div>
        <div className="mb-24">
          <p className="max-w-sm mt-20 mb-3 text-3xl font-bold">FROTH-TED HOT COCOA ITHOLATE PROTEIN</p>
          <p className="text-2xl mb-7">NRS.5799</p>
          <hr className="my-4 border-t border-gray-300 mb-7"></hr>
          <div className="flex flex-col">
          <button className="bg-white hover:bg-black h-12 w-[450px] border-t border-l border-b border-r border-black text-black hover:text-white  mb-5" onClick={ItholateProductClick}>
            Add to Cart</button>
          <button className="bg-violet-500 hover:bg-violet-600 h-12 w-[450px] border-t border-l border-b border-r border-black flex justify-center items-center text-white " onClick={khalti}>Pay with <Image src="/images/khalto.png" alt="Example image" width={335} height={470} className="rounded-md w-[75px] h-[42px] " /></button>
          </div>
          
          <div>
          <button className="bg-orange-700 rounded-md h-6 w-16 text-xs text-white absolute top-10 left-[600px]">New In</button>
          </div>
        </div>  
        </div>
      </section>


      {/* fuel your potential  */}
      <section className="flex gap-5">
        <p className="flex gap-10 my-10 ml-5 font-light text-7xl text-lime-700">FUEL YOUR POTENTIAL</p><p className="my-10 font-bold text-black text-7xl">RAW ENDURANCE</p>
      </section>



      {/* RAW ENDURANCE */}
      <section>
    <div className="relative mx-5 mb-5">
    <div>
       <Image src="/images/Running.png" alt="Example image" width={1500} height={0} className="rounded-md w-[1500px] h-[600px] object-cover " />
        <div className="absolute ml-16 top-56 left max-w-60">
           <p className="mb-5 font-light text-white text-7xl">RAW</p>
        <p className="font-bold text-white text-7xl">ENDURANCE</p></div>
        </div>
    </div>
      </section>



      {/* endurance and cbum components */}
    <section>
      {/* endurace image inside picture */}
      <div className="relative flex justify-between gap-5 mx-5 mt-5 mb-8">
        <div>
        <Image src="/images/fuel.png" alt="Example image" width={350} height={0} className="rounded-md w-[350px] h-[460px] object-cover " />
        <div className="absolute mt-5 top-64 left max-w-60 ml-7">
           <p className="mb-5 text-3xl font-bold text-white">ENDURANCE</p>
        <p className="text-sm text-white">Explore RAW Nutrition's Endurance Collection, ideal for endurance athletes and individuals pushing their limits during workouts. This collection includes...</p></div>
        </div>
        <div className="flex justify-center gap-10 mt-20">
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
          <p>{product.price}</p>
        </div>
      ))}
    </div>
      </div>
    </section>


      {/* train harder than before with Raw */}
      <section>
    <p className="mb-5 text-2xl font-bold text-center ">TRAIN HARDER THAN BEFORE WITH RAW</p>
    <div className="flex gap-5 mx-5 mb-40 display:">
      {/* first img and components */}
      <div className="">
       <Image src="/images/woman.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" />
      <div className="max-w-sm ml-10">
        <p className="my-3 text-2xl font-bold">How to Incorporate Strength Training into Your Endurance Plan</p>
      <p className="mb-12 text-sm">Strength training is the secret sauce for any endurance athlete looking to elevate their performance. Whether you're running, cycling, or tackling long-distance challenges, building a stronger, more resilient body is...</p>
      <p className="text-sm">October 21, 2024</p></div>
      </div>
      {/* second img and components */}
      <div>
        <Image src="/images/wbatta.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" />
        <div className="ml-10">
        <p className="max-w-sm my-3 text-2xl font-bold">Boost Your Endurance: Essential Supplements for Athletes</p>
      <p className="max-w-sm mb-12 text-sm">Whether you're a bodybuilder, cyclist, distance runner, swimmer, CrossFitter, triathlete, or participate in a sport, your performance strongly depends on endurance. Proper nutrition, sleep, and recovery will always be the...</p>
      <p className="text-sm">October 21, 2024</p></div>
        </div>
        {/* third img and components */}
      <div>
        <Image src="/images/manrun.webp" alt="Example image" width={470} height={0} className="rounded-t-md w-[470px] h-[270px] object-cover" />
        <div className="max-w-sm ml-10">
        <p className="my-3 text-2xl font-bold">Exercise-Induced Cortisol: Friend or Foe?</p>
      <p className="mb-12 text-sm">When we think about exercise, we often focus on its numerous benefits, improved cardiovascular health, better mood, increased strength, endurance, and more. However, one critical aspect often overlooked in training...</p>
      <p className="text-sm">October 17, 2024</p></div></div> 
    </div>
      </section>


      {/* from the people */}
      <section className="mb-40 ml-20">
        <div className="flex display: ">
          <div className="flex flex-col display:">
          <p className="mb-5 text-xl font-semibold  text-black">From the people</p>
          <div className="flex mb-5 display:">
            <GradeRoundedIcon fontSize="small"/>
            <GradeRoundedIcon fontSize="small"/>
            <GradeRoundedIcon fontSize="small"/>
            <GradeRoundedIcon fontSize="small"/>
            <GradeRoundedIcon fontSize="small"/>
          </div>
          <p className="max-w-xs mb-5 mr-10 text-2xl font-bold">Mixes VERY well, smooth and clean flavor. Perfect combo for kiwi and blueberry flavors, neither overpower the other. Love this EAA flavor!</p>
          <p>— Chelsea L.</p>
          </div>
          <div className="flex gap-5 display:">
          <div className="absolute mt-2 right-24 ml-100">
            <button className="w-10 h-10 mr-1 bg-white"> <ArrowBackIosRoundedIcon fontSize="small"/> </button>
            <button className="w-10 h-10 bg-white"> <ArrowForwardIosRoundedIcon fontSize="small"/> </button>
          </div>
            <div><Image src="/images/one.webp" alt="Example image" width={305} height={0} className="rounded-md object-cover [305px] h-[305px]" /></div>
            <div><Image src="/images/two.webp" alt="Example image" width={305} height={0} className="rounded-md object-cover [305px] h-[305px]" /></div>
            <div><Image src="/images/three.webp" alt="Example image" width={305} height={0} className="rounded-md object-cover [305px] h-[305px]"/> </div>
          </div>
        </div>
      </section>


    
      
     </main> 
  );
}

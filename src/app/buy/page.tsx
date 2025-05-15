"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { CartItem, useCart } from "../context/cartContext";

export default function Buy() {
  const [subscription, setSubscription] = useState("one-time");
  const searchParams = useSearchParams();
  const productName = searchParams.get("name") || "Product Name";
  const price = searchParams.get("price") || "Price Not Available";
  const image = searchParams.get("image") || "/images/default.png";
  const description = searchParams.get("description") || "";
  const sizesParam = searchParams.get("sizes");
  const sizes = sizesParam ? sizesParam.split(",") : [];
  const { addToCart } = useCart();
  const router = useRouter();
 
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (sizes.length > 0 && !selectedSize) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes, selectedSize]);

  const parsedPrice = Number(price.replace(/[^\d.]/g, ""));
  const discountedPrice = parsedPrice * 0.9;

  const formatPrice = (price: number) => {
    return `Rs. ${price.toFixed(2)}`;
  };

  const handleAddToCart = () => {
    const finalPrice = subscription === "subscribe" ? discountedPrice : parsedPrice;

    const product: CartItem = {
      id: `${productName}-${selectedSize}`,
      product_name: productName,
      price: finalPrice,
      quantity,
      image,
      selectedSize,
    };

    addToCart(product); 
    router.push("/cart");
  };

  return (
    <section>
      <div className="flex justify-between">
        <div className="ml-32 mt-32">
          <Image 
            src={image} 
            alt={productName} 
            width={600} 
            height={600} 
            className="rounded-md w-[600px] h-[600px] object-cover" 
          />
        </div>
        <div className="mr-60 mt-44 w-[450px]">
          <h1 className="font-bold text-3xl font-sans text-gray-900 mb-3">{productName}</h1>
          <h2 className="font-normal text-2xl text-gray-700">{formatPrice(parsedPrice)}</h2>
          <hr className="my-4 border-t border-gray-300 mb-7" />

          {sizes.length > 0 && (
            <>
              <h1 className="text-gray-700 mb-2">Size</h1>
              <select
                className="w-[450px] h-12 mb-7 pl-2 border border-gray-400 rounded-md"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </>
          )}

          <div className="mb-7">
            <h2 className="text-gray-700 mb-2">Quantity</h2>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full h-12 pl-2 pr-8 border border-gray-400 rounded-md number-input"
            />
          </div>

          <div className="border border-black rounded-md p-4 mb-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="purchase"
                  value="subscribe"
                  checked={subscription === "subscribe"}
                  onChange={() => setSubscription("subscribe")}
                  className="mr-2"
                />
                Subscribe & Save 10%
              </div>
              <span className="font-bold">{formatPrice(discountedPrice)}</span>
            </label>
            {subscription === "subscribe" && (
              <select className="w-full h-10 mt-2 p-2 border border-gray-400 rounded-md">
                <option>Delivery every 4 weeks</option>
                <option>Delivery every 6 weeks</option>
                <option>Delivery every 8 weeks</option>
              </select>
            )}
          </div>

          <div className="border border-black rounded-md p-4 mb-7">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="purchase"
                  value="one-time"
                  checked={subscription === "one-time"}
                  onChange={() => setSubscription("one-time")}
                  className="mr-2"
                />
                One-time
              </div>
              <span className="font-bold">{formatPrice(parsedPrice)}</span>
            </label>
          </div>

          <button 
            className="bg-orange-700 hover:bg-black h-12 w-full border-black text-white rounded-md mb-10 transition-colors duration-200" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <div className="space-y-3">
            <p className="font-semibold">Spikes Strength</p>
            <p className="font-semibold">Generates Muscular Power</p>
            <p className="font-semibold">Improves Muscle Fullness</p>
            <p className="font-semibold mb-6">Tried And True.</p>
            <p>{description}</p>
            <p className="mt-4">
              Creatine is a naturally occurring compound in the body that plays a critical role in the production of ATP, the primary source of energy
              for your muscles. Raw Nutrition's Creatine delivers pure, high-quality creatine monohydrate to help increase muscle energy, strength, and
              endurance so you can push harder and train longer.
            </p>
            <p className="mt-4">
              Shop Creatine and feel the effects of one of the safest and most studied supplements currently available!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

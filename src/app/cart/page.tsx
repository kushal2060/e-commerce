 "use client";
import { CartItem, useCart } from "../context/cartContext"; // Ensure you import CartItem type
import Image from "next/image";
import Link from "next/link";
import KhaltiPayment from "../components/Khalti";
import { useEffect ,useState } from "react";
import { useAuth } from "../context/AuthContext";
 
export default function CartPage() {
    // Use the cart context here
     
   
    const { cartItems, updateQuantity,removeItem,fetchCart } = useCart();
    const { user, isAuthenticated } = useAuth();
    const [cart, setCart] = useState([]);
     
    useEffect(() => {
        if (isAuthenticated) {
          // Fetch cart data for the logged-in user from the server
          fetchCart();
        } else {
          // Optionally, you could clear the cart if the user is not authenticated
          setCart([]);
        }
      }, [isAuthenticated]);
    


    // Function to calculate the subtotal
    const calculateSubtotal = (): string => {
        return cartItems
            .reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)  // Explicitly typing 'acc' and 'item' as CartItem
            .toFixed(2);
    };
  
    // Function to calculate the total (including protection)
    const calculateTotal = (): string => {
        const subtotal = calculateSubtotal();
        return (parseFloat(subtotal) + 150).toFixed(2); // Adding the package protection fee
    };
    
    return (
         <div className="max-w-4xl mx-auto p-6 font-sans mt-20">
            <h1 className="text-3xl font-bold mb-6">YOUR CART ({cartItems.length})</h1>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="font-medium">Shipping & Billing Address MUST Match to Place an Order</p>
            </div>

            <div className="mb-8 space-y-2">
                <p className="text-green-600 font-semibold">🎉 Congrats! You've unlocked Free Shipping!</p>
                <p className="text-gray-600">Thankyou For Shopping!</p>
            </div>

            {/* Cart Items */}
             
            <div className="space-y-8">
                {cartItems.map((item: CartItem) => (  // Explicitly typing 'item' as CartItem
                
                    <div key={item.id} className="flex gap-6 border-b pb-6">
                         <Image
                            src={item.image}
                            alt={item.product_name}
                            width={100}
                            height={100}
                            className="rounded-md"
                        />

                        <div className="flex-1">
                            <h3 className="font-bold text-lg">{item.product_name}</h3>
                             
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center border rounded">
                                    <button
                                        className="px-3 py-1"
                                        onClick={() => updateQuantity(item.id, "decrease")}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button
                                        className="px-3 py-1"
                                        onClick={() => updateQuantity(item.id, "increase")}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="font-bold">Rs.{Number(item.price).toFixed(2)}</span>
                            </div>
                        </div>
                        <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 mt-4 underline"
            >
              Remove
            </button>
                    </div>
                ))}
            </div>
             


            {/* Order Summary */}
            <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                    <span>SUBTOTAL</span>
                    <span className="font-bold">Rs.{calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between">
                    <span>Checkout+ Package Protection</span>
                    <span>Rs.150</span>
                </div>
                <div className="flex justify-between font-bold text-xl">
                    <span>CHECKOUT+ TOTAL</span>
                    <span>Rs.{calculateTotal()}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-4">
                <button className="w-full bg-gray-800 text-white py-4 rounded font-bold hover:text-gray-200">
                <Link href={"/"}>CONTINUE SHOPPING</Link>
                </button>
                <p className="text-center text-blue-600 hover:underline cursor-pointer">
                    Continue without package protection
                </p>
                {cartItems.map((item: CartItem) => (
                    <div key={item.id}> 
                        <KhaltiPayment totalAmount={parseFloat(calculateTotal())} purchase_order_id={item.id} purchase_order_name={item.product_name}/></div>
                 ) )
                }
               

            </div>
        </div>
    );
}


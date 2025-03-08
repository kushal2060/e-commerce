"use client";
 import Image from "next/image";
import { useState } from "react";

 
 
interface KhaltiPaymentProps {
    totalAmount: number;
    purchase_order_id: string,
    purchase_order_name:string,
     
  }

  const KhaltiPayment: React.FC<KhaltiPaymentProps> = ({ totalAmount,purchase_order_id,purchase_order_name}) => {
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
 
 
  const handlePayment = async () => {
    const storedUser = localStorage.getItem("user");
    const userObject = storedUser ? JSON.parse(storedUser) : null;
    const name=userObject.username;
    const email=userObject.email;
    console.log(name,email)
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/khalti/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          public_key: "pk_live_2ca114cf1bc647c191ae6e7642fdcfbd",
          amount:   totalAmount*100, // Amount in paisa (10 NPR = 1000 paisa)
          mobile: "9800000001",
          transaction_id: "txn_123456",
          purchase_order_id: purchase_order_id,
          purchase_order_name:purchase_order_name,
          name: name,
          email:email,
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

    setLoading(false);
  };

  return (

<button 
  className="w-full bg-violet-600 text-white py-4 rounded font-bold hover:bg-violet-500 flex items-center justify-center gap-2"
  onClick={handlePayment}
  disabled={loading}
> 
  {loading ? "Processing..." : "Pay with Khalti"}
  {!loading && (
    <Image
      src="/images/khalto.png"
      alt="Khalti Logo"
      width={75}
      height={42}
      className="rounded-md w-[75px] h-[42px]"
    />
  )}
</button>


  );
};

export default KhaltiPayment;
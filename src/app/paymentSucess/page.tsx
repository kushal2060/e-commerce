"use client";  

 import Link from "next/link";

export default function PaymentSuccess() {
 
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");

  const transaction_id = searchParams.get("transaction_id");
  const amount = searchParams.get("amount");
  const finalAmount = amount ? parseFloat(amount) / 100 : 0;
  const status = searchParams.get("status");

  return (
    <div className="p-6 max-w-lg mx-auto text-center mt-40 mb-40">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="text-lg mt-4">Thank you for your payment!</p>
      <div className="mt-6 p-4 border rounded bg-gray-100">
        <p><strong>Transaction ID:</strong> {transaction_id || "N/A"}</p>
        <p><strong>Amount Paid:</strong> Rs.  {finalAmount || "N/A"}</p>
        <p><strong>Status:</strong> {status || "N/A"}</p>
      </div>
      <button className="w-full bg-gray-800 text-white py-3 rounded font-bold hover:text-gray-200 mt-10">
                 <Link href={"/supplements"}> CONTINUE SHOPPING</Link>
                </button>
    </div>
  );
}

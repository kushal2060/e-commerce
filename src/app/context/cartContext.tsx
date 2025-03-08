// "use client";
// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';

// // Define CartItem type
// export interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   selectedSize: string;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   updateQuantity: (id: string, action: "increase" | "decrease") => void;
//   removeItem: (id: string) => void;
//   fetchCart: () => void; // Add method to fetch cart items
// }
// // CartContext to provide the cart state
// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [token, setToken] = useState<string | null>(null);
//   useEffect(() => {
//     // Try to get the token from localStorage or sessionStorage
//     const storedToken = localStorage.getItem('access_token');
//     setToken(storedToken);
//     if (storedToken) {
//       fetchCart(); // Fetch cart items if user is logged in
//     }
//   }, []);
//   const fetchCart = async () => {
//     if (!token) return; // Don't fetch if no token exists
//     try {
//       const response = await axios.get('/api/cart/', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCartItems(response.data); // Update cart state with data from backend
//     } catch (error) {
//       console.error('Failed to fetch cart:', error);
//     }
//   };

//   // Add to cart function
//   const addToCart = (item: CartItem) => {
//     console.log("Adding item to cart:", item);
//     setCartItems((prevItems) => {
//       // Check if the item already exists in the cart
//       const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         // If item exists, update the quantity
//         return prevItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       } else {
//         // If item doesn't exist, add a new item to the cart
//         return [...prevItems, item];
//       }
//     });
//   };

//   // Update quantity function
//   const updateQuantity = (id: string, action: "increase" | "decrease") => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
//             }
//           : item
//       )
//     );
//   };

//   // Remove item from the cart
//   const removeItem = (id: string) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem ,fetchCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
 
"use client";
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { AxiosError } from "axios";

// Define CartItem type
export interface CartItem {
  id: string;
  product_name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, action: "increase" | "decrease") => void;
  removeItem: (id: string) => void;
  fetchCart: () => void; // Add method to fetch cart items
}

// CartContext to provide the cart state
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Try to get the token from localStorage or sessionStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    const storedToken = localStorage.getItem('access_token');
    setToken(storedToken);
    if (storedToken) {
        // Fetch cart items if user is logged in
    }
  }, [cartItems]);
  
  const refreshToken = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
        refresh: localStorage.getItem('refresh_token'),
      });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token); // Store new token
      return access_token;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      // Handle token refresh failure (e.g., redirect to login)
    }
  };
  
  // Fetch Cart Items from the Backend
  const fetchCart = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return; // Don't fetch if no token exists
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(response.data); // Update cart state with data from backend
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  // Add to cart function with token refresh handling
  const addToCart = async (item: CartItem) => {
    let token = localStorage.getItem("access_token");

    if (!token) {
      alert("You need to log in")
      console.error("No token found. User is not authenticated.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cart/add/",
        {
          product_name: item.product_name,
          size: item.selectedSize,
          price: item.price,
          quantity: item.quantity,
          image: item.image, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Item added to cart:", response.data);
      fetchCart(); // Refresh cart after adding item
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        console.error("Unauthorized: Token is invalid or expired.");
        token = await refreshToken(); // Try to refresh the token
        if (token) {
          // Retry the request with the new token
          await addToCart(item); // Retry the original request
        }
      } else {
        console.error("Error adding to cart:", error);
      }
    }
  };

  // Update item quantity in the cart
  const updateQuantity = (id: string, action: "increase" | "decrease") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Remove item from the cart
  // Remove item from the cart
const removeItem = async (id: string) => {
  // Get the token from localStorage
  let token = localStorage.getItem("access_token");

  if (!token) {
    console.error("No token found. User is not authenticated.");
    return;
  }

  try {
    // Fetch cart items from the state (not from localStorage)
    const updatedCartItems = cartItems.filter((item: CartItem) => item.id !== id);

    // Update localStorage with the new list (without the removed item)
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    // Update the cart state immediately to re-render the UI
    setCartItems(updatedCartItems);

    // Send the request to remove the item from the backend
    await axios.delete(`http://127.0.0.1:8000/api/cart/remove/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { id }, // Send the item ID to the server to remove it
    });

    // Optionally, you can re-fetch the cart to reflect the latest backend state
    // fetchCart(); // Uncomment this if you want to sync frontend with backend
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      console.error("Unauthorized: Token is invalid or expired.");
      token = await refreshToken(); // Try to refresh the token
      if (token) {
        // Retry the original remove request with the new token
        await removeItem(id);
      }
    } else {
      console.error("Failed to remove item from cart:", error);
    }
  }
};



  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


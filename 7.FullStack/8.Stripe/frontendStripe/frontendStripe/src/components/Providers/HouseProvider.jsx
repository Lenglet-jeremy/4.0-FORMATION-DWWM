import { useState } from "react";
import { HouseContext } from "../../context/HouseContext";
import { data } from "../../data/location";

export default function HouseProvider({ children }) {
  const [houses, setHouses] = useState(data);
  const [cart, setCart] = useState([]);

  function addToCart(house) {
    setCart([...cart, house]);
  }
  return (
    <HouseContext.Provider value={{ houses, addToCart, cart }}>
      {children}
    </HouseContext.Provider>
  );
}

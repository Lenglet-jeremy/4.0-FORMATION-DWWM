import React, { useContext } from "react";
import { HouseContext } from "../context/HouseContext";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const { cart } = useContext(HouseContext);
  console.log(cart);

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PM4rsH23Q9RYfjbZ6auXXXSTAwNCUNGOUtK7vVnxCbzNQCTcvy4Ei0HrsqWGKNd48n8WUKJxZJa116IVoK6KDgw00UaI9V0Vi");

    const response = fetch ("http://localhost:5000/api/createCheckout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {products : cart} ),
  });
  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
  };



  const total = cart.reduce((acc, value) => {acc += value.price; return acc}, 0);
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Cart</h1>
      <button disabled={!total && true} onClick={makePayment} className="btn btn-primary">PAY {total ? total : ""}</button>
    </div>
  );
}

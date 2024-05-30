const router = require("express").Router();
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
    const {products} = req.body;
const lineItems = products.map((product) => ({
    price_data : {
        currency : 'eur',
        product_data : {
            name : product.name
        },
        unit_amount : Math.round(product.price * 100)
    },
    quantity : 1

    }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types : ['card'],
        line_items : lineItems,
        mode : 'payment',
        success_url : `http://localhost:5173`,
        cancel_url : `http://localhost:5173/cart`,
    });
    res.json({id : session.id});
});



// /api/createCheckout

module.exports = router;

const express = require("express");
const router = express.Router();

const UserWl = require("../models/userwl");
const cleanBody = require("../middlewares/cleanBody");

router.get("/:wallet", cleanBody, async (req, res) => {
  try {
    // const { wallet} = req.body;
    const { wallet } = req.params;

    console.log("wallet", wallet, req.params)

    if (!wallet) {
      return res.send({
        error: true,
        message: "Please Enter Valid wallet",
      });
    }

    //1. Find if any account with that email exists in DB
    const user = await UserWl.findOne({ wallets: wallet });

    // NOT FOUND - Throw error
    if (user) {
      return res.send({
        success: true,
        message: "Congratulations! You are on the blastlist!!",
      });
    }

    //Success
    return res.send({
      error: true,
      message: "Sorry, You're not on the blastlist!",

    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
});

module.exports = router;

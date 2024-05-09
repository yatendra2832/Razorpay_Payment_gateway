import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
const Home = () => {
  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:4000/api/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", {
        amount,
      });

      var options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: "INR",
        name: "Healthify",
        description: "Stay Healthy,Stay Happy",
        image:
          "https://avatars.githubusercontent.com/u/113310722?s=400&u=82bcf49744fd38e6e32946a8fb9718b98e9f507c&v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Siya Yadav",
          email: "siya@gmail.com",
          contact: "8860358877",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#007bff",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        h={"100vh"}
        spacing={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          amount={5000}
          img={
            "https://medias.audiofanzine.com/images/normal/apple-macbook-pro-15-touchbar-2017-1846209.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={8500}
          img={
            "https://i5.walmartimages.com/asr/e3ced41b-70f0-4afa-813a-6aa923980501_2.0388a3cf5a00012a75f3d3898a4d1062.jpeg"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;

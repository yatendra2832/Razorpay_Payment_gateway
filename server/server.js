import { app } from "./app.js"
import Razorpay from "razorpay"
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is Running on the PORT ${port}`)
})
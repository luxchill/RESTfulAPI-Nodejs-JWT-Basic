const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productsRoute = require("./routes/products");

dotenv.config();
const app = express();

// kết nối database
// async function connectToDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("Đã kết nối thành công Mongodb");
//   } catch (error) {
//     console.error("Lỗi kết nối:", error);
//   }
// }
// connectToDatabase();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Đã kết nối thành công Mongodb");
  } catch (error) {
    console.error(error);
  }
};

connectToDatabase();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/luxchill/auth", authRoute);
app.use("/luxchill/user", userRoute);
app.use("/luxchill/products", productsRoute);

app.listen(6789, () => {
  console.log("Server is running");
});

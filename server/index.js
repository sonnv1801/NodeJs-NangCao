require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRouter = require("./routes/Products");
const userRouter = require("./routes/Users");
const ApiUserRouter = require("./routes/ApiUser");
const foodRouter = require("./routes/Food");
const ApiFoodRouter = require("./routes/ApiFood");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@vs-shop.vks61.mongodb.net/VS-Shop?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/user", ApiUserRouter);
app.use("/api/food", foodRouter);
app.use("/api/food", ApiFoodRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

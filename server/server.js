const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
const connectdb = require("../server/utils/db");

// cors middleware
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,ADD,DELETE,HEAD,PATCH",
  Credentials: true,
};
app.use(cors(corsOption));

// to handle json value in request body it's called middleware
app.use(express.json());

app.use("/api/auth", router);

const PORT = 3000;

// if the connection builds sucessfully then only start the port
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("sever running ");
  });
});

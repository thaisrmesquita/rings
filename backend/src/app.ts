import express from "express";
import sequelize from "./database";

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Courage is the best defense you have right now!");
    console.log("Server is running on port 3000");
  });
});

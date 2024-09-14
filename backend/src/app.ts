import express from "express";
import sequelize from "./database";
import ringRoutes from "./routes/ringRoutes";

const app = express();
app.use(express.json());

app.use("/api/v1", ringRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Courage is the best defense you have right now!");
    console.log("Server is running on port 3000");
  });
});

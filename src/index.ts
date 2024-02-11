import express from "express";
import { routes } from "../routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Service is running in port 3000`);
});

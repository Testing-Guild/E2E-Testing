import express, { Application, Response, Request } from "express";
import signup from "./router/signup";
const app: Application = express();
app.use((req: Request, res: Response, next: Function) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());

app.use(signup);
app.listen(3000, () => {
  console.log("server run on port 3000");
});

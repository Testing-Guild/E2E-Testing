import express, { Application, Response, Request } from "express";
import signup from "./router/signup";
const app: Application = express();
express.json();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello ,E2e Test");
});
app.use(signup);
app.listen(3000, () => {
  console.log("server run on port 3000");
});

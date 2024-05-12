import e, { Request, Response } from "express";
const route = e.Router();

interface SignUpUser {
  username: string;
  password: string;
}

route.post<SignUpUser>(
  "/signup",
  async (req: Request<SignUpUser>, res: Response) => {
    try {
      const { username, password } = req.body as SignUpUser;
      
      res
        .status(201)
        .json({ success: true, message: "User Created Successfully!" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
);

export default route;

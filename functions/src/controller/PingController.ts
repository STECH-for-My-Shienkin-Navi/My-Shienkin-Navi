import { Request, Response } from "firebase-functions"; 

export async function PingController(req: Request, res: Response) {
  res.json({msg: "Hello, firebase functions."});
}
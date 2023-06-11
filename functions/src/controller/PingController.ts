import { Request, Response } from "firebase-functions"; 

export async function PingController(req: Request, res: Response) {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({msg: "Hello, firebase functions."});
}
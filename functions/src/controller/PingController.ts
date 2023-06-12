import { Request, Response } from "firebase-functions"; 

export async function PingController(req: Request, res: Response) {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');

  res.json({msg: "Hello, firebase functions."});
}
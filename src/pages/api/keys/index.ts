// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IKeyRegister, KeyData } from "@/utils/database";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IKeyRegister[]>
) {
  const dataToReturn = KeyData;
  res.status(200).json(dataToReturn);
}

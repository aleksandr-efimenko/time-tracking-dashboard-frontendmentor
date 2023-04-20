import type { NextApiRequest, NextApiResponse } from "next";

export interface Profile {
    userName: string;
    color: string;
    avatarSrc: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  const data = {
    userName: "Jeremy Robson",
    color: "blue",
    avatarSrc: "/images/image-jeremy.png",
  }
    

  res.status(200).json(data);
}

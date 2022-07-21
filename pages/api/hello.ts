// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

const data = {
  Shocked: '  <circle cx="63" cy="92" r="21" fill="#333"></circle> ',

  Confused:
    ' <path fill="#333" d="M83 92a21.001 21.001 0 00-42 0h42z"></path> ',

  Anxious:
    '<path stroke="#333" stroke-linecap="round" stroke-width="4" d="M47 82L80 82"></path> ',

  Smile:
    ' <path stroke="#333" stroke-linecap="round" stroke-width="4" d="M39 79c15.5 15.5 31 14 46-1"></path>',
};

type Req = "Shocked" | "Confused" | "Anxious" | "Smile";

enum Emotion {
  "Shocked",
  "Confused",
  "Anxious",
  "Smile",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query.emo as string;
  const emo = query as Req;
  const emotionSvg: string = data[emo];
  const svgdata = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="124"
  height="124"
  fill="none"
  viewBox="0 0 124 124"
>
<circle cx="62" cy="62" r="62" fill="#E4D653"></circle>
<ellipse cx="37" cy="44.5" fill="#333" rx="10" ry="10.5"></ellipse>
<ellipse cx="86" cy="44.5" fill="#333" rx="10" ry="10.5"></ellipse>
  ${emotionSvg}
  
  </svg>
  `;
  res.setHeader("content-type", "image/svg+xml");
  res.status(200).send(svgdata);
}

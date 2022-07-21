import React from "react";
import { Emotion } from "../pages";

const data = {
  Shocked: <circle cx="63" cy="92" r="21" fill="#333"></circle>,

  Confused: <path fill="#333" d="M83 92a21.001 21.001 0 00-42 0h42z"></path>,
  Anxious: (
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth="4"
      d="M47 82L80 82"
    ></path>
  ),
  Smile: (
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth="4"
      d="M39 79c15.5 15.5 31 14 46-1"
    ></path>
  ),
};

export function Icon({ emotion }: {
  emotion: Emotion
}  ) {
  return (
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
      {data[emotion]}
    </svg>
  );
}

export function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="38"
      fill="none"
      viewBox="0 0 32 38"
    >
      <path
        fill="#D9D9D9"
        d="M29.237 15.631c2.458 1.573 2.458 5.165 0 6.738L6.157 37.143C3.493 38.847 0 36.935 0 33.773V4.227C0 1.065 3.494-.847 6.156.857l23.08 14.774z"
      ></path>
    </svg>
  );
}

export function LeftArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="39"
      fill="none"
      viewBox="0 0 32 39"
    >
      <path
        fill="#D9D9D9"
        d="M2.263 16.131c-2.458 1.573-2.458 5.165 0 6.738l23.08 14.774c2.663 1.704 6.157-.208 6.157-3.37V4.727c0-3.161-3.494-5.073-6.157-3.369L2.264 16.131z"
      ></path>
    </svg>
  );
}

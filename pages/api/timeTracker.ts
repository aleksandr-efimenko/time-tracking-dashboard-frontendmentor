import type { NextApiRequest, NextApiResponse } from "next";

export interface Activity {
  title: string;
  color: string;
  icon: string;
  timeframes: {
    daily: { current: number; previous: number };
    weekly: { current: number; previous: number };
    monthly: { current: number; previous: number };
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity[]>
) {
  const data = [
    {
      title: "Work",
      color: "light-orange",
      icon: "/images/icon-work.svg",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      color: "soft-blue",
      icon: "/images/icon-play.svg",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      color: "light-red",
      icon: "/images/icon-study.svg",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      color: "lime-green",
      icon: "/images/icon-exercise.svg",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      color: "violet",
      icon: "/images/icon-social.svg",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      color: "soft-orange",
      icon: "/images/icon-self-care.svg",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  res.status(200).json(data);
}

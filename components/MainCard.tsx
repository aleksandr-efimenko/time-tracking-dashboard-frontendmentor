import React from "react";
import cardStyle from "@/styles/Card.module.css";
import pageStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const periods = ["daily", "weekly", "monthly"];

export default function MainCard({
  userName,
  cardName,
  avatarSrc,
  color,
}: {
  userName: string;
  cardName: string;
  avatarSrc: string;
  color: string;
}) {
  return (
    <div
      className={`${cardStyle["main-card-container"]} rounded ${pageStyles[cardName]} ${cardStyle[color]} `}
    >
      <div className={cardStyle["main-card-header"]}>
        <Image src={avatarSrc} alt="avatar" width={78} height={78} />
        <p>Report for</p>
        <h1>{userName}</h1>
      </div>
      <div className={cardStyle["main-card-body"]}>
        {periods.map((period) => (
          <Link key={period} href="#">
            {period}
          </Link>
        ))}
      </div>
    </div>
  );
}

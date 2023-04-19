import React from "react";
import cardStyle from "@/styles/Card.module.css";
import pageStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const periods = ["Daily", "Weekly", "Monthly"];

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
      className={`${cardStyle["main-card-container"]} ${pageStyles[cardName]}`}
    >
      <div className={`${cardStyle["main-card-header"]} ${cardStyle[color]}`}>
        <Image className={cardStyle['avatar-container']} src={avatarSrc} alt="avatar" width={78} height={78} />
        <div className={cardStyle['main-card-text-block']}>
          <p>Report for</p>
          <h1 className={cardStyle["main-card-container-header"]}>{userName}</h1>
        </div>
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

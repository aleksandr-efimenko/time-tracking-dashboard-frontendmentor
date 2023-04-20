import React from "react";
import pageStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import mainCardStyles from "@/styles/MainCard.module.css";

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
      className={`${mainCardStyles["main-card-container"]} ${pageStyles[cardName]}`}
    >
      <div className={`${mainCardStyles["main-card-header"]} ${mainCardStyles[color]}`}>
        <Image className={mainCardStyles['avatar-container']} src={avatarSrc} alt="avatar" width={78} height={78} />
        <div className={mainCardStyles['main-card-text-block']}>
          <p>Report for</p>
          <h1 className={mainCardStyles["main-card-container-header"]}>{userName}</h1>
        </div>
      </div>
      <div className={mainCardStyles["main-card-body"]}>
        {periods.map((period) => (
          <Link key={period} href="#">
            {period}
          </Link>
        ))}
      </div>
    </div>
  );
}

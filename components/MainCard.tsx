import React from "react";
import pageStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import mainCardStyles from "@/styles/MainCard.module.css";

const periods = ["daily", "weekly", "monthly"];

export default function MainCard({
  userName,
  cardName,
  avatarSrc,
  color,
  selectedPeriod,
  setSelectedPeriod
}: {
  userName: string;
  cardName: string;
  avatarSrc: string;
  color: string;
  selectedPeriod: string;
  setSelectedPeriod: Function;
}) {
  return (
    <div
      className={`${mainCardStyles["main-card-container"]} ${pageStyles[cardName]}`}
    >
      <div className={`${mainCardStyles["main-card-header"]} ${mainCardStyles[color]}`}>
        <div className={mainCardStyles['user-info-container']}>
          <div className={mainCardStyles['avatar-container']}>
            <Image  src={avatarSrc} alt="avatar" fill />
          </div>
          <div className={mainCardStyles['user-info-text']}>
            <p>Report for</p>
            <h1 className={mainCardStyles["main-card-container-header"]}>{userName}</h1>
          </div>
        </div>
      </div>
      <div className={mainCardStyles["main-card-body"]}>
        {periods.map((period) => (
          <Link 
          onClick={() => setSelectedPeriod(period)}
          className={period === selectedPeriod ? mainCardStyles['active-period'] : ''} 
          key={period} href="#">
            {period}
          </Link>
        ))}
      </div>
    </div>
  );
}

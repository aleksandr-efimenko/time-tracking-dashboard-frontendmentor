import React from "react";
import cardStyle from "@/styles/Card.module.css";
import Image from "next/image";

export default function MainCard({ userName, cardName, avatarSrc }: { userName: string, cardName: string, avatarSrc: string }) {
  return (
    <div className={`rounded ${cardStyle[cardName]} ${cardStyle['main-card-container']}`}>
      <div className={cardStyle['main-card-header']}>
        <Image src={avatarSrc} alt="avatar" width={78} height={78} />
        <p>Report for</p>
        <h1>{userName}</h1>
      </div>
      .
    </div>
  );
}

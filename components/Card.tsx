import React from "react";
import cardStyle from "@/styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";
import iconElipsis from "@/public/images/icon-ellipsis.svg";

export default function Card({
  cardName,
  title,
  current,
  previous,
  units,
  color,
  icon,
  link,
}: {
  cardName: string;
  title: string;
  current: number;
  previous: number;
  units: "hrs" | "mins";
  color: string;
  icon: string;
  link: string;
}) {
  return (
    <div
      className={`${cardStyle["card-container"]} ${cardName} ${cardStyle[color]}`}
    >
      <Image src={icon} alt="icon" width={78} height={78} />

      <div className={`${cardStyle["card-body"]}`}>
        <div className={cardStyle["card-body-header-container"]}>
          <h2>{title}</h2>
          <Link href={link}>
            <Image
              src={iconElipsis}
              width={18}
              height={5}
              alt="three dots icon"
            />
          </Link>
        </div>
        <p className={cardStyle["current-value"]}>
          {current} {units}
        </p>
        <p className={cardStyle["previous-value"]}>
          Last Week - {previous} {units}
        </p>
      </div>
    </div>
  );
}

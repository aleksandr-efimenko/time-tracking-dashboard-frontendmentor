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
  color,
  icon,
  link,
}: {
  cardName: string;
  title: string;
  current: number;
  previous: number;
  color: string;
  icon: string;
  link: string;
}) {
  return (
    <div className={`rounded card-container ${cardName}`}>
      <div className={`${cardStyle['card-header']} ${cardStyle[color]} rounded`}>
        <Image src={icon} alt="icon" width={78} height={78} />
      </div>
      <div className={`${cardStyle["card-body"]} rounded`}>
        <div className="">
          <h2>{title}</h2>
          <Link href={link}>
            <Image src={iconElipsis} width={18} height={5} alt='three dots icon' />
          </Link>
        </div>
        <p>{current}</p>
        <p>Last Week - {previous}</p>
      </div>
    </div>
  );
}

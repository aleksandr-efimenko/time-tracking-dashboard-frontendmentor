import React from "react";
import cardStyle from "@/styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Card({
  title,
  current,
  previous,
  color,
  icon,
  link,
}: {
  title: string;
  current: number;
  previous: number;
  color: string;
  icon: string;
  link: string;
}) {
  return (
    <div className="rounded card-container">
      <div className="card-header">
        <div className="card-icon">
          <Image src={icon} alt="icon" />
        </div>
      </div>
      <div className="card-body">
        <div className="">
          <h2>{title}</h2>
          <Link href={link}>...</Link>
        </div>
        <p>{current}</p>
        <p>Last Week - {previous}</p>
      </div>
    </div>
  );
}

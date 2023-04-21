import React from "react";
import cardStyle from "@/styles/Card.module.css";
import Image from "next/image";

export default function CardSkeleton() {
  return (
    <div className={`${cardStyle["card-container"]} skeleton`}>
      <div className={`${cardStyle["card-body"]}`}>
        <div className={cardStyle["card-body-header-container"]}>
          <div className={`${cardStyle["card-title-skeleton"]} skeleton`} />
          </div>

          <div className={cardStyle["values-container"]}>
            <div
              className={`${cardStyle["card-main-value-skeleton"]} skeleton`}
            />

            <div
              className={`${cardStyle["card-additional-value-skeleton"]} skeleton`}
            />
          </div>
        </div>
      </div>
  );
}

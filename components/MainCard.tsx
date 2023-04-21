import React, { useEffect, useState } from "react";
import pageStyles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import mainCardStyles from "@/styles/MainCard.module.css";
import { Profile } from "@/pages/api/profile";

const periods = ["daily", "weekly", "monthly"];

export default function MainCard({
  selectedPeriod,
  setSelectedPeriod,
}: {
  selectedPeriod: string;
  setSelectedPeriod: Function;
}) {
  const [profileData, setProfileData] = useState<Profile>({} as Profile);
  const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(false);
  useEffect(() => {
    setIsLoadingProfile(true);
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        setIsLoadingProfile(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingProfile(false);
      });
  }, []);

  if (isLoadingProfile) {
    return <SkeletonMainCard />;
  }

  return (
    <div
      className={`${mainCardStyles["main-card-container"]} ${pageStyles["main-card"]}`}
    >
      <div
        className={`${mainCardStyles["main-card-header"]} ${
          mainCardStyles[profileData.color]
        }`}
      >
        <div className={mainCardStyles["user-info-container"]}>
          <div className={`${mainCardStyles["avatar-container"]} `}>
            <Image
              src={profileData.avatarSrc}
              alt="avatar"
              fill
              placeholder="empty"
              blurDataURL=""
            />
          </div>
          <div className={mainCardStyles["user-info-text"]}>
            <p>Report for</p>
            <h1 className={`${mainCardStyles["main-card-container-header"]} `}>
              {profileData.userName}
            </h1>
          </div>
        </div>
      </div>
      <div className={mainCardStyles["main-card-body"]}>
        {periods.map((period) => (
          <Link
            onClick={() => setSelectedPeriod(period)}
            className={
              period === selectedPeriod ? mainCardStyles["active-period"] : ""
            }
            key={period}
            href="#"
          >
            {period}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SkeletonMainCard() {
  return (
    <div
      className={`${mainCardStyles["main-card-container"]} ${pageStyles["main-card"]}`}
    >
      <div
        className={`${mainCardStyles["main-card-header"]} ${mainCardStyles["blue"]}`}
      >
        <div className={mainCardStyles["user-info-container"]}>
          <div className={`${mainCardStyles["avatar-container"]} `}>
            <div className={`${mainCardStyles["avatar-skeleton"]} skeleton`} />
          </div>
          <div className={mainCardStyles["user-info-text"]}>
            <div
              className={`${mainCardStyles["user-info-text-skeleton-paragraph"]} skeleton`}
            />
            <div
              className={`${mainCardStyles["user-info-text-skeleton-heading"]} skeleton`}
            />
            <div
              className={`${mainCardStyles["user-info-text-skeleton-heading"]} skeleton`}
            />
          </div>
        </div>
      </div>
      <div className={mainCardStyles["main-card-body"]}>
        {periods.map((period) => (
          <div
            key={period}
            className={`${mainCardStyles["user-info-text-skeleton-paragraph"]} skeleton ${mainCardStyles["active-period"]}`}
          />
        ))}
      </div>
    </div>
  );
}

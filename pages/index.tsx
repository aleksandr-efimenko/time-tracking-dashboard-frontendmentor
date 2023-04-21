import Head from "next/head";
import { Rubik } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
import MainCard from "@/components/MainCard";
import { useEffect, useState } from "react";
import { Activity } from "./api/timeTracker";
import CardSkeleton from "@/components/CardSkeleton";

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500"] });

export type CardType = {
  cardName: string;
  title: string;
  current: number;
  previous: number;
  units: "hrs" | "mins";
  color: string;
  icon: string;
  link: string;
};

export default function Home() {
  const [trackerData, setTrackerData] = useState<Activity[]>([]);
  const [isLoadingTracker, setIsLoadingTracker] = useState<boolean>(false);
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("weekly");

  useEffect(() => {
    setIsLoadingTracker(true);
    fetch("/api/timeTracker")
      .then((res) => res.json())
      .then((data) => {
        setTrackerData(data);
        setIsLoadingTracker(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingTracker(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Time tracking dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${rubik.className} centered`}>
        <div className={styles["card-grid"]}>
          <MainCard selectedPeriod={period} setSelectedPeriod={setPeriod} />

          {isLoadingTracker &&
            Array(6)
              .fill(0)
              .map((i) => <CardSkeleton key={i} />)}
          {isLoadingTracker ||
            trackerData.map((card) => (
              <Card
                key={card.title}
                cardName={card.title.replace(" ", "").toLowerCase()}
                title={card.title}
                current={card.timeframes[period].current}
                previous={card.timeframes[period].previous}
                units={"hrs"}
                color={card.color}
                icon={card.icon}
                link="#"
              />
            ))}
        </div>
      </main>
    </>
  );
}

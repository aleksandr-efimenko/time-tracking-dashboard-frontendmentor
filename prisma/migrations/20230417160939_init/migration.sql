-- CreateTable
CREATE TABLE "Activity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Timeframe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "activityTypeId" INTEGER NOT NULL,
    "current" INTEGER NOT NULL,
    "previous" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    CONSTRAINT "Timeframe_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "ActivityType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Timeframe_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActivityType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

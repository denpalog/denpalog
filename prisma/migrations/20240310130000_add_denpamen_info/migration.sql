/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UniqueDenpamenNF" (
    "id" INTEGER NOT NULL,
    "generation" INTEGER NOT NULL,
    "bodyColorId" INTEGER NOT NULL,
    "antennaId" INTEGER NOT NULL,

    CONSTRAINT "UniqueDenpamenNF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Antenna" (
    "id" SERIAL NOT NULL,
    "i18nKey" TEXT NOT NULL,

    CONSTRAINT "Antenna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAccount" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "userAccountId" INTEGER NOT NULL,
    "avater_url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerProfileNF" (
    "id" SERIAL NOT NULL,
    "userProfileId" INTEGER NOT NULL,
    "playername" TEXT NOT NULL,

    CONSTRAINT "PlayerProfileNF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerIndividualDenpamenNF" (
    "id" SERIAL NOT NULL,
    "uniqueDenpamenNFId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "PlayerIndividualDenpamenNF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniqueDenpamenAdditionalColorNF" (
    "id" SERIAL NOT NULL,
    "bodyPatternId" INTEGER NOT NULL,
    "bodyColorId" INTEGER NOT NULL,
    "uniqueDenpamenId" INTEGER NOT NULL,

    CONSTRAINT "UniqueDenpamenAdditionalColorNF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyColor" (
    "id" SERIAL NOT NULL,
    "i18nKey" TEXT NOT NULL,

    CONSTRAINT "BodyColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyPattern" (
    "id" SERIAL NOT NULL,
    "i18nKey" TEXT NOT NULL,

    CONSTRAINT "BodyPattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrowthSnapshotNF" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "ap" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defence" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "playerIndividualDenpamenNFId" INTEGER NOT NULL,
    "uniqueDenpamenNFId" INTEGER NOT NULL,

    CONSTRAINT "GrowthSnapshotNF_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Antenna_i18nKey_key" ON "Antenna"("i18nKey");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userAccountId_key" ON "UserProfile"("userAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_username_key" ON "UserProfile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerProfileNF_userProfileId_playername_key" ON "PlayerProfileNF"("userProfileId", "playername");

-- CreateIndex
CREATE UNIQUE INDEX "UniqueDenpamenAdditionalColorNF_uniqueDenpamenId_key" ON "UniqueDenpamenAdditionalColorNF"("uniqueDenpamenId");

-- CreateIndex
CREATE UNIQUE INDEX "BodyColor_i18nKey_key" ON "BodyColor"("i18nKey");

-- CreateIndex
CREATE UNIQUE INDEX "BodyPattern_i18nKey_key" ON "BodyPattern"("i18nKey");

-- CreateIndex
CREATE UNIQUE INDEX "GrowthSnapshotNF_playerIndividualDenpamenNFId_key" ON "GrowthSnapshotNF"("playerIndividualDenpamenNFId");

-- CreateIndex
CREATE UNIQUE INDEX "GrowthSnapshotNF_level_playerIndividualDenpamenNFId_key" ON "GrowthSnapshotNF"("level", "playerIndividualDenpamenNFId");

-- AddForeignKey
ALTER TABLE "UniqueDenpamenNF" ADD CONSTRAINT "UniqueDenpamenNF_bodyColorId_fkey" FOREIGN KEY ("bodyColorId") REFERENCES "BodyColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniqueDenpamenNF" ADD CONSTRAINT "UniqueDenpamenNF_antennaId_fkey" FOREIGN KEY ("antennaId") REFERENCES "Antenna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "UserAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerProfileNF" ADD CONSTRAINT "PlayerProfileNF_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerIndividualDenpamenNF" ADD CONSTRAINT "PlayerIndividualDenpamenNF_uniqueDenpamenNFId_fkey" FOREIGN KEY ("uniqueDenpamenNFId") REFERENCES "UniqueDenpamenNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerIndividualDenpamenNF" ADD CONSTRAINT "PlayerIndividualDenpamenNF_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "PlayerProfileNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniqueDenpamenAdditionalColorNF" ADD CONSTRAINT "UniqueDenpamenAdditionalColorNF_bodyPatternId_fkey" FOREIGN KEY ("bodyPatternId") REFERENCES "BodyPattern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniqueDenpamenAdditionalColorNF" ADD CONSTRAINT "UniqueDenpamenAdditionalColorNF_bodyColorId_fkey" FOREIGN KEY ("bodyColorId") REFERENCES "BodyColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniqueDenpamenAdditionalColorNF" ADD CONSTRAINT "UniqueDenpamenAdditionalColorNF_uniqueDenpamenId_fkey" FOREIGN KEY ("uniqueDenpamenId") REFERENCES "UniqueDenpamenNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrowthSnapshotNF" ADD CONSTRAINT "all" FOREIGN KEY ("playerIndividualDenpamenNFId") REFERENCES "PlayerIndividualDenpamenNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrowthSnapshotNF" ADD CONSTRAINT "pin" FOREIGN KEY ("playerIndividualDenpamenNFId") REFERENCES "PlayerIndividualDenpamenNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrowthSnapshotNF" ADD CONSTRAINT "GrowthSnapshotNF_uniqueDenpamenNFId_fkey" FOREIGN KEY ("uniqueDenpamenNFId") REFERENCES "UniqueDenpamenNF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

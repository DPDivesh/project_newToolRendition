/*
  Warnings:

  - A unique constraint covering the columns `[TerminalId]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `TerminalId` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashBalance` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeName` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `Cassette1` VARCHAR(191) NULL,
    ADD COLUMN `TerminalId` VARCHAR(191) NOT NULL,
    ADD COLUMN `balType` VARCHAR(191) NULL,
    ADD COLUMN `balanceAsOf` VARCHAR(191) NULL,
    ADD COLUMN `cashBalance` VARCHAR(191) NOT NULL,
    ADD COLUMN `estCashOut` VARCHAR(191) NULL,
    ADD COLUMN `lastCashWD` VARCHAR(191) NULL,
    ADD COLUMN `lastCommunication` VARCHAR(191) NULL,
    ADD COLUMN `rejectBalance` VARCHAR(191) NULL,
    ADD COLUMN `storeName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Posts_TerminalId_key` ON `Posts`(`TerminalId`);

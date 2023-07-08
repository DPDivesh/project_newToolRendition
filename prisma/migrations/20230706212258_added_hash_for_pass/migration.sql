/*
  Warnings:

  - A unique constraint covering the columns `[cPassHash]` on the table `ScrapeInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `ScrapeInfo` ADD COLUMN `cPassHash` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ScrapeInfo_cPassHash_key` ON `ScrapeInfo`(`cPassHash`);

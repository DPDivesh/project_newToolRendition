/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ScrapeInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `ScrapeInfo_provider_key` ON `ScrapeInfo`;

-- CreateIndex
CREATE UNIQUE INDEX `ScrapeInfo_email_key` ON `ScrapeInfo`(`email`);

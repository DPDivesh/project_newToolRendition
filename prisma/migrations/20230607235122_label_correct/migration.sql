/*
  Warnings:

  - You are about to drop the column `email` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Posts` DROP COLUMN `email`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

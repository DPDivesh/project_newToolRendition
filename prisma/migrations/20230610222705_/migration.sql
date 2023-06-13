/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Posts_TerminalId_key` ON `Posts`;

-- CreateIndex
CREATE UNIQUE INDEX `Posts_userEmail_key` ON `Posts`(`userEmail`);

/*
  Warnings:

  - You are about to drop the column `Cassette1` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `TerminalId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `balType` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `balanceAsOf` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `cashBalance` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `estCashOut` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `lastCashWD` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `lastCommunication` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `rejectBalance` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `storeLocation` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `storeName` on the `posts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Posts_TerminalId_key` ON `posts`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `Cassette1`,
    DROP COLUMN `TerminalId`,
    DROP COLUMN `balType`,
    DROP COLUMN `balanceAsOf`,
    DROP COLUMN `cashBalance`,
    DROP COLUMN `estCashOut`,
    DROP COLUMN `lastCashWD`,
    DROP COLUMN `lastCommunication`,
    DROP COLUMN `rejectBalance`,
    DROP COLUMN `storeLocation`,
    DROP COLUMN `storeName`;

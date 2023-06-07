-- CreateTable
CREATE TABLE `Posts` (
    `id` VARCHAR(191) NOT NULL,
    `TerminalId` VARCHAR(191) NOT NULL,
    `storeName` VARCHAR(191) NOT NULL,
    `storeLocation` VARCHAR(191) NULL,
    `cashBalance` VARCHAR(191) NOT NULL,
    `balType` VARCHAR(191) NULL,
    `estCashOut` VARCHAR(191) NULL,
    `lastCommunication` VARCHAR(191) NULL,
    `lastCashWD` VARCHAR(191) NULL,
    `rejectBalance` VARCHAR(191) NULL,
    `balanceAsOf` VARCHAR(191) NULL,
    `Cassette1` VARCHAR(191) NULL,
    `minReload` VARCHAR(191) NULL,

    UNIQUE INDEX `Posts_TerminalId_key`(`TerminalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

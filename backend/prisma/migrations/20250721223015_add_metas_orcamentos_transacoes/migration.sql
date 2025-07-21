/*
  Warnings:

  - You are about to drop the column `currentAmount` on the `goal` table. All the data in the column will be lost.
  - You are about to drop the column `deadline` on the `goal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `goal` table. All the data in the column will be lost.
  - You are about to drop the column `targetAmount` on the `goal` table. All the data in the column will be lost.
  - Added the required column `dataFim` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goal` DROP COLUMN `currentAmount`,
    DROP COLUMN `deadline`,
    DROP COLUMN `name`,
    DROP COLUMN `targetAmount`,
    ADD COLUMN `dataFim` DATETIME(3) NOT NULL,
    ADD COLUMN `titulo` VARCHAR(191) NOT NULL,
    ADD COLUMN `valor` DOUBLE NOT NULL;

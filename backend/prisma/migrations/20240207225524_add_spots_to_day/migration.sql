/*
  Warnings:

  - You are about to drop the column `spot` on the `Day` table. All the data in the column will be lost.
  - Added the required column `spots` to the `Day` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Day" DROP COLUMN "spot",
ADD COLUMN     "spots" INTEGER NOT NULL;

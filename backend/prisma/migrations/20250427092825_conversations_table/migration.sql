/*
  Warnings:

  - A unique constraint covering the columns `[person1Id,person2Id]` on the table `conversation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "message" ADD COLUMN     "content" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "conversation_person1Id_person2Id_key" ON "conversation"("person1Id", "person2Id");

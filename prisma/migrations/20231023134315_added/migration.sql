/*
  Warnings:

  - Added the required column `created_at` to the `deactivated_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `deactivated_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `deactivated_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deactivated_users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

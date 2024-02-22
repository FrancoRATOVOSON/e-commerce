/*
  Warnings:

  - You are about to drop the column `status` on the `orders` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shopper_id" INTEGER NOT NULL,
    "validated_at" DATETIME,
    "delivered_at" DATETIME,
    CONSTRAINT "orders_shopper_id_fkey" FOREIGN KEY ("shopper_id") REFERENCES "shoppers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("delivered_at", "id", "shopper_id", "validated_at") SELECT "delivered_at", "id", "shopper_id", "validated_at" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

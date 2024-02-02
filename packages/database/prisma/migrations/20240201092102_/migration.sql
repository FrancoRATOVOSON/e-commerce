/*
  Warnings:

  - You are about to drop the column `facture` on the `orders` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `product_orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shopper_id" INTEGER NOT NULL,
    "validated_at" DATETIME,
    "status" TEXT NOT NULL,
    CONSTRAINT "orders_shopper_id_fkey" FOREIGN KEY ("shopper_id") REFERENCES "shoppers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("id", "shopper_id", "status", "validated_at") SELECT "id", "shopper_id", "status", "validated_at" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE TABLE "new_product_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "order_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "product_orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_orders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_orders" ("id", "order_id", "product_id") SELECT "id", "order_id", "product_id" FROM "product_orders";
DROP TABLE "product_orders";
ALTER TABLE "new_product_orders" RENAME TO "product_orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'MGA',
    "category_name" TEXT NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    CONSTRAINT "products_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "categories" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("category_name", "currency", "description", "discount", "id", "name", "price") SELECT "category_name", "currency", "description", "discount", "id", "name", "price" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

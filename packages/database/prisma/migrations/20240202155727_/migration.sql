-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" TEXT NOT NULL,
    "order_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "product_orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_orders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_product_orders" ("id", "order_id", "product_id", "quantity") SELECT "id", "order_id", "product_id", "quantity" FROM "product_orders";
DROP TABLE "product_orders";
ALTER TABLE "new_product_orders" RENAME TO "product_orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

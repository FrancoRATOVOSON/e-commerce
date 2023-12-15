-- CreateTable
CREATE TABLE "shoppers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "admins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'MGA',
    "category_name" TEXT NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    CONSTRAINT "products_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "categories" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "name" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    CONSTRAINT "tags_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "categories" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "facture" TEXT,
    "shopper_id" INTEGER NOT NULL,
    "validated_at" DATETIME,
    "status" TEXT NOT NULL,
    CONSTRAINT "orders_shopper_id_fkey" FOREIGN KEY ("shopper_id") REFERENCES "shoppers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product_tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Product_id" TEXT NOT NULL,
    "tag_id" INTEGER NOT NULL,
    CONSTRAINT "product_tags_Product_id_fkey" FOREIGN KEY ("Product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "product_orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Product_id" TEXT NOT NULL,
    "order_id" INTEGER NOT NULL,
    CONSTRAINT "product_orders_Product_id_fkey" FOREIGN KEY ("Product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_orders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "shoppers_login_key" ON "shoppers"("login");

-- CreateIndex
CREATE UNIQUE INDEX "admins_login_key" ON "admins"("login");

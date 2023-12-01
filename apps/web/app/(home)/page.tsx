import { Metadata } from "next";
import { Card } from "ui";
import { CardList, Header } from "./components";
import { getProductList } from "../lib";

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function Web() {
  const productList = getProductList()
  
  return (
    <div>
      <Header/>
      <CardList/>
    </div>
  );
}
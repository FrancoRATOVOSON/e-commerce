import { Metadata } from "next";
import { CardList, Filter } from "./components";

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function Web() {
  return (
    <div className="flex flex-row items-stretch justify-between px-6 gap-x-10">
      <Filter/>
      <CardList/>
    </div>
  );
}
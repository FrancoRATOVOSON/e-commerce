import { Metadata } from "next";
import { CardList, Filter, Header } from "./components";

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function Web() {
  return (
    <div className="bg-white text-light-text-high dark:bg-black dark:text-dark-text-high">
      <Header/>
      <div className="flex flex-row items-start justify-between px-6 gap-x-10">
        <Filter/>
        <CardList/>
      </div>
    </div>
  );
}
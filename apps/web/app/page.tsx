import { Metadata } from "next";
import { Hello } from "ui";

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Hello/>
    </div>
  );
}
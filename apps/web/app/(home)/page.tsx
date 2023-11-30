import { Metadata } from "next";
import { Card, Hello } from "ui";
import { Header } from "./components";

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function Web() {
  return (
    <div>
      <Header/>
      <h1>Web</h1>
      <Hello/>
    </div>
  );
}
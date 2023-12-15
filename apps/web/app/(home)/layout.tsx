import * as React from 'react'
import { Metadata } from 'next/types';
import { Header } from './components';

export const metadata:Metadata = {
  title: 'YShop',
  description: 'Shop better'
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header/>
      {children}
    </>
  );
}

import * as React from 'react'
import { Header } from './components';

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

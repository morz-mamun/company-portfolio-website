import Navbar from '@/components/shared/navbar';
import React from 'react';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-screen">
      {/* NAVBAR */}
      <Navbar />
      <div>{children}</div>
    </main>
  );
}

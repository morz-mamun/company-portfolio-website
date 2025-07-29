import PrimaryBtn from '@/components/shared/primary-btn';
import React from 'react';

export default function HomePage() {
  return (
    <main className="container mx-auto overflow-hidden py-0 md:py-14">
      <h1 className="text-center">Home Page Content here</h1>
      <PrimaryBtn label="Contact" />
    </main>
  );
}

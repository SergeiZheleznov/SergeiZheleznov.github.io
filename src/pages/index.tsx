import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="min-h-screen dark:(bg-slate-800 text-white)">
      <Helmet>
        <html className="dark" lang="en" />
        <body className="text-lg" />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title>Hello TypeScript!</Title>
        <p className="font-sans text-lg">Sample text (Sans)</p>
        <p>Another sample</p>
      </div>
    </main>
  );
}

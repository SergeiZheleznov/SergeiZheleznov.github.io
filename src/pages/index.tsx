import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="min-h-screen dark:(bg-zinc-900 text-white)">
      <Helmet>
        <html className="dark" lang="en" />
        <body className="h-screen w-full text-base" />
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl">
          <Title>
            Hello <span className="font-extrabold">TypeScript!</span>
          </Title>
          <p className="font-sans text-lg">Sample text</p>
          <p>
            Another <span className="font-bold">sample</span>
          </p>
        </div>
      </div>
    </main>
  );
}

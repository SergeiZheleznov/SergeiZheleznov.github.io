import React from 'react';
import { Helmet } from 'react-helmet';
import { Txt } from '@/components';

const Home = () => (
  <main className="min-h-screen dark:(bg-zinc-900 text-white)">
    <Helmet>
      <html className="dark" lang="en" />
      <body className="h-screen w-full text-base" />
    </Helmet>
    <div className="h-screen flex items-center justify-center dark:(text-slate-200)">
      <div className="max-w-3xl">
        <div>
          <Txt b v="ppl">
            Hi
          </Txt>{' '}
          <Txt b v="amb">
            there!
          </Txt>
        </div>
      </div>
    </div>
  </main>
);

export default Home;

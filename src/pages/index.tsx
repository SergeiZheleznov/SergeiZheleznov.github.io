import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Txt } from '@/components';

const Home = () => {
  const [count, setCount] = useState(1);

  return (
    <main className="min-h-screen dark:(bg-zinc-900 text-white)">
      <Helmet>
        <html className="dark" lang="en" />
        <body className="h-screen w-full text-base" />
      </Helmet>
      <div className="h-screen flex items-center justify-center dark:(text-slate-200)">
        <div className="max-w-3xl">
          <div>
            <Txt b v="blu">
              Hi there!
            </Txt>
          </div>
          <Txt v="ppl">Another</Txt>{' '}
          <Txt v="amb" b>
            sample
          </Txt>
          <button type="button" onClick={() => setCount(count + 1)}>
            {count}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;

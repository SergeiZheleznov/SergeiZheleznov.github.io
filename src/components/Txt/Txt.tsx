import React from 'react';
import { BaseComponentProps } from '@/types';

type TxtVariants = 'amb' | 'grn' | 'blu' | 'ppl';

type TwColor = 'stone' | 'emerland' | 'amber' | 'violet' | 'blue';
type TwDensity = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 50;

interface ITxtProps extends BaseComponentProps {
  v?: TxtVariants;
  b?: boolean;
  bb?: boolean;
}

export const Txt: React.FC<ITxtProps> = ({ children, v, b, bb }) => {
  let className = 'text-stone-400';

  const setColor = (clr: TwColor, den: TwDensity) => {
    className = `text-${clr}-${den}`;
  };

  v === 'blu' && setColor('blue', 600);
  v === 'grn' && setColor('emerland', 400);
  v === 'amb' && setColor('amber', 400);
  v === 'ppl' && setColor('violet', 600);

  const classes = [className];
  b && classes.push('font-bold');
  bb && classes.push('font-extrabold');

  return <span className={classes.join(' ')}>{children}</span>;
};

Txt.defaultProps = {
  v: undefined,
  b: undefined,
  bb: undefined,
};

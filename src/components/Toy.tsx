import { FC } from 'react';

import { ToyType } from '../types/toy';

import { JsonLint } from './toys';

interface ToyProps {
  toy: ToyType;
}

export const Toy: FC<ToyProps> = ({ toy }) => {
  let ToyComponent: () => JSX.Element;

  switch (toy) {
    case ToyType.json_lint:
      ToyComponent = JsonLint;
      break;
    default:
      throw new Error(`Unknown toy: ${toy}`);
  }

  return (
    <div>
      <ToyComponent />
    </div>
  );
};

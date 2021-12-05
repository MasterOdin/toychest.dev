import React, { FC } from 'react';
import { Toy as ToyEnum } from './toys/enum';
import { JsonLint, YamlLint } from './toys';

interface ToyProps {
  toy: ToyEnum;
}

export const Toy: FC<ToyProps> = ({ toy }) => {
  let ToyComponent: () => JSX.Element;

  switch (toy) {
    case ToyEnum.json_lint:
      ToyComponent = JsonLint;
      break;
    case ToyEnum.yaml_lint:
      ToyComponent = YamlLint;
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

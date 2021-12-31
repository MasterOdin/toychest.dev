import { FC } from 'react';

import { ToyType } from '../types/toy';

import {
  Base64EncoderDecoder,
  HashGenerator,
  JsonLint,
  LoremIpsumGenerator,
} from './toys';

interface ToyProps {
  toy: ToyType;
}

export const Toy: FC<ToyProps> = ({ toy }) => {
  let ToyComponent: () => JSX.Element;

  switch (toy) {
    case ToyType.base64_encoder_decoder:
      ToyComponent = Base64EncoderDecoder;
      break;
    case ToyType.hash_generator:
      ToyComponent = HashGenerator;
      break;
    case ToyType.json_lint:
      ToyComponent = JsonLint;
      break;
    case ToyType.lorem_ipsum_generator:
      ToyComponent = LoremIpsumGenerator;
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

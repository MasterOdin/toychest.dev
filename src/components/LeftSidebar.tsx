import { FC } from 'react';

import { ToyType } from '../types/toy';

interface LeftSidebarProps {
  setToy: (toy: ToyType) => void;
}

export const LeftSidebar: FC<LeftSidebarProps> = ({ setToy }) => {
  const toys = {
    'JSON Lint': ToyType.json_lint,
    'Base64 Encoder/Decoder': ToyType.base64_encoder_decoder,
    'Hash Generator': ToyType.hash_generator,
    'Lorem Ipsum Generator': ToyType.lorem_ipsum_generator,
    'XML Lint': ToyType.xml_lint,
  };

  return (
    <div className="pl-1 pt-1">
      <ul>
        {Object.entries(toys).map(([name, toy]) => (
          <li key={toy} className="cursor-pointer" onClick={() => setToy(toy)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

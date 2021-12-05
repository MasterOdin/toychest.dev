import React, { FC } from 'react';
import { Toy } from './toys/enum';

interface LeftSidebarProps {
  setToy: (toy: Toy) => void;
}

export const LeftSidebar: FC<LeftSidebarProps> = ({ setToy }) => {
  const toys = {
    "JSON Lint": Toy.json_lint,
    "YAML LINT": Toy.yaml_lint,
  };

  return (
    <div className="pl-1 pt-1">
      <ul>
        {Object.entries(toys).map(([name, toy]) => (
          <li key={toy} onClick={() => setToy(toy)}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

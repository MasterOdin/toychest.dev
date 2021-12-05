import React, { FC } from 'react';
import { ToyType } from '../types/toy';

interface LeftSidebarProps {
  setToy: (toy: ToyType) => void;
}

export const LeftSidebar: FC<LeftSidebarProps> = ({ setToy }) => {
  const toys = {
    "JSON Lint": ToyType.json_lint,
    "YAML LINT": ToyType.yaml_lint,
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

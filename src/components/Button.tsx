import cx from 'classnames';
import { FC } from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

const buttonClasses: Record<ButtonType, string> = {
  [ButtonType.primary]: 'bg-blue-500 hover:bg-blue-700 text-white',
  [ButtonType.secondary]: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
};

interface ButtonProps {
  onClick: () => void;
  type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = ButtonType.primary,
}) => {
  return (
    <button
      className={cx(buttonClasses[type], 'font-bold py-2 px-4 rounded')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

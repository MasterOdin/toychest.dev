import { FC } from 'react';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      {error}
    </div>
  );
};

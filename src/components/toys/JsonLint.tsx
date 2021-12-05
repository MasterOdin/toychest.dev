import { useCallback, useRef } from 'react';

import { SplitPane } from '../SplitPane';

export const JsonLint = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const validateClick = useCallback(() => {
    if (!inputRef.current || !outputRef.current) {
      return;
    }
    const input = inputRef.current?.value;
    const output = JSON.stringify(JSON.parse(input), null, 2);
    outputRef.current.value = output;
  }, [inputRef, outputRef]);

  return (
    <SplitPane>
      <div className="p-1">
        <div>Input</div>
        <div>
          <button onClick={validateClick}>Validate</button>
        </div>
        <div>
          <textarea
            ref={inputRef}
            className="border-2 border-black w-full p-1"
            rows={25}
          />
        </div>
      </div>
      <div className="p-1">
        <div className="mb-6">Output</div>
        <div>
          <textarea
            ref={outputRef}
            className="border-2 border-black w-full p-1"
            rows={25}
            readOnly={true}
          />
        </div>
      </div>
    </SplitPane>
  );
};

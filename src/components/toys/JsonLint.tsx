import { useCallback, useRef, useState } from 'react';

import { Button, ButtonType } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { SplitPane } from '../SplitPane';

export const JsonLint = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [error, setError] = useState<string | null>(null);

  const validateClick = useCallback(() => {
    if (
      !inputRef.current ||
      !numberRef.current ||
      !outputRef.current ||
      !selectRef.current
    ) {
      return;
    }
    const input = inputRef.current?.value;
    try {
      const output = JSON.stringify(
        JSON.parse(input),
        null,
        (selectRef.current.value === 'spaces' ? ' ' : '\t').repeat(
          parseInt(numberRef.current.value, 10),
        ),
      );
      outputRef.current.value = output;
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }, [inputRef, outputRef, selectRef]);

  return (
    <SplitPane defaultWidth={930}>
      <div className="p-1">
        <div>Input</div>
        <div>
          <Button type={ButtonType.secondary} onClick={validateClick}>
            Validate
          </Button>
          <select ref={selectRef}>
            <option value="spaces">Spaces</option>
            <option value="tabs">Tabs</option>
          </select>
          <input
            type="number"
            min={1}
            max={10}
            defaultValue={2}
            ref={numberRef}
          />
        </div>
        <div>
          <textarea
            ref={inputRef}
            className="border-2 border-black w-full p-1"
            rows={25}
            spellCheck={false}
          />
        </div>
      </div>
      <div className="p-1">
        <div className="mb-10">Output</div>
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <textarea
            ref={outputRef}
            className="border-2 border-black w-full p-1"
            rows={25}
            readOnly={true}
            spellCheck={false}
          />
        )}
      </div>
    </SplitPane>
  );
};

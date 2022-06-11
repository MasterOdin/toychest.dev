import { useCallback, useState } from 'react';

import { Button, ButtonType } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { SplitPane } from '../SplitPane';

enum SpacerType {
  spaces = 'spaces',
  tabs = 'tabs',
}

export const JsonLint = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [spacing, setSpacing] = useState(2);
  const [spacer, setSpacer] = useState<SpacerType>(SpacerType.spaces);

  const [error, setError] = useState<string | null>(null);

  const validateClick = useCallback(() => {
    try {
      const output = JSON.stringify(
        JSON.parse(input),
        null,
        (spacer === SpacerType.spaces ? ' ' : '\t').repeat(spacing),
      );
      setOutput(output);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }, [input, spacer, spacing]);

  return (
    <SplitPane defaultWidth={930}>
      <div className="p-1">
        <div>Input</div>
        <div>
          <Button type={ButtonType.secondary} onClick={validateClick}>
            Validate
          </Button>
          <select
            value={spacer}
            onChange={(e) => setSpacer(e.target.value as SpacerType)}
          >
            <option value={SpacerType.spaces}>Spaces</option>
            <option value={SpacerType.tabs}>Tabs</option>
          </select>
          <input
            type="number"
            min={1}
            max={10}
            value={spacing}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              setSpacing(Number.isNaN(val) ? 2 : val);
            }}
          />
        </div>
        <div>
          <textarea
            className="border-2 border-black w-full p-1"
            onChange={(e) => setInput(e.target.value)}
            rows={25}
            spellCheck={false}
            value={input}
          />
        </div>
      </div>
      <div className="p-1">
        <div className="mb-10">Output</div>
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <textarea
            className="border-2 border-black w-full p-1"
            rows={25}
            readOnly={true}
            spellCheck={false}
            value={output}
          />
        )}
      </div>
    </SplitPane>
  );
};

import { useCallback, useState } from 'react';

import { Button, ButtonType } from '../Button';

export const Base64EncoderDecoder = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const encodeClick = useCallback(() => {
    setOutput(btoa(input));
  }, [input, setOutput]);

  const decodeClick = useCallback(() => {
    setInput(atob(output));
  }, [output, setInput]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter text to base64 encode"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Button type={ButtonType.secondary} onClick={encodeClick}>
          Encode
        </Button>
        <Button type={ButtonType.secondary} onClick={decodeClick}>
          Decode
        </Button>
      </div>
      <div>
        <input
          type="text"
          value={output}
          placeholder="Enter text to base64 decode"
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>
    </div>
  );
};

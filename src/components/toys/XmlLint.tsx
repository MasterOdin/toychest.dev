import { useCallback, useState } from 'react';
import xmlFormat from 'xml-formatter';

import { Button } from '../Button';

export const XmlLint = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = useCallback(() => {
    setOutput(xmlFormat(input));
  }, [input, setOutput]);

  return (
    <>
      <div>
        <textarea
          rows={15}
          className="w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={handleFormat}>Format</Button>
      </div>
      <div>
        <textarea rows={15} className="w-full" value={output} readOnly={true} />
      </div>
    </>
  );
};

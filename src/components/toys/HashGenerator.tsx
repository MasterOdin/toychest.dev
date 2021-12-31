import { createHash } from 'crypto';
import { useMemo, useState } from 'react';

export const HashGenerator = () => {
  const [input, setInput] = useState<string>('');

  const md5Value = useMemo(
    () => createHash('md5').update(input).digest('hex'),
    [input],
  );
  const sha1Value = useMemo(
    () => createHash('sha1').update(input).digest('hex'),
    [input],
  );
  const sha256Value = useMemo(
    () => createHash('sha256').update(input).digest('hex'),
    [input],
  );
  const sha512Value = useMemo(
    () => createHash('sha512').update(input).digest('hex'),
    [input],
  );

  return (
    <div className="w-full">
      <div>
        <textarea
          className="w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          value={md5Value}
          readOnly={true}
        />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          value={sha1Value}
          readOnly={true}
        />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          value={sha256Value}
          readOnly={true}
        />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          value={sha512Value}
          readOnly={true}
        />
      </div>
    </div>
  );
};

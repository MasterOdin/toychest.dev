import { LoremIpsum } from 'lorem-ipsum';
import { useCallback, useState } from 'react';

import { Button, ButtonType } from '../Button';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const LoremIpsumGenerator = () => {
  const [text, setText] = useState<string>('');

  const generateParagraph = useCallback(() => {
    setText(lorem.generateParagraphs(1));
  }, [setText]);

  const generateSentence = useCallback(() => {
    setText(lorem.generateSentences(1));
  }, [setText]);

  const generateWord = useCallback(() => {
    setText(lorem.generateWords(1));
  }, [setText]);

  const clearText = useCallback(() => {
    setText('');
  }, [setText]);

  return (
    <div>
      <div>
        <Button type={ButtonType.secondary} onClick={generateParagraph}>
          Generate Paragraph
        </Button>
        <Button type={ButtonType.secondary} onClick={generateSentence}>
          Generate Sentence
        </Button>
        <Button type={ButtonType.secondary} onClick={generateWord}>
          Generate Word
        </Button>
        <Button type={ButtonType.secondary} onClick={clearText}>
          Clear Text
        </Button>
      </div>
      <div>
        <textarea
          className="w-full"
          value={text}
          rows={50}
          placeholder="Generate lorem ipsum text..."
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
};

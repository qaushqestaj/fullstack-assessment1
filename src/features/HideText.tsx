import { useState } from 'react';
import './HideText.css';

interface HideTextProps {
  text: string;
  maxChars?: number;
}

function Accordion({ text, maxChars = 200 }: HideTextProps) {
  const [open, setOpen] = useState(false);
  const isLong = text.length > maxChars;

  if (!isLong) {
    return <p className="accordion-content">{text}</p>;
  }

  const displayText = open ? text : text.slice(0, maxChars).trimEnd() + '…';

  return (
    <div className="accordion">
      <p className="accordion-content">{displayText}</p>
      <button className="accordion-toggle" onClick={() => setOpen((o) => !o)}>
        {open ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default Accordion;

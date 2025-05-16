import { useState } from 'react';
import './HideText.css';

interface HideTextProps {
  text: string;
  maxChars?: number; // Optional character limit before truncation (default: 200)
}

/**
 * Accordion Component
 *
 * Truncates long text and toggles between collapsed and full view.
 * Useful for showing previews of long content (e.g., descriptions, comments).
 */

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

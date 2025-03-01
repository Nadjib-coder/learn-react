import padsData from './pads';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [pads, setPads] = useState(padsData);
  const buttonElements = pads.map((pad) => <button key={pad.id}></button>);
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

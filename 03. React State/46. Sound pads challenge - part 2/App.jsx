import React from 'react';
import padsData from './pads';
import Pad from './Pad';

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map((pad) => (
    <Pad color={pad.color} key={pad.id} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

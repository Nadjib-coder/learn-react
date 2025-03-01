import React from 'react';
import padsData from './pads';
import Pad from './Pad';

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    // console.log(id);
    setPads((prev) =>
      prev.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      }),
    );
  }

  function toggleOf() {
    setPads((prev) =>
      prev.map((pad) => {
        return {
          ...pad,
          on: false,
        };
      }),
    );
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ));

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
        <button className="toggle-of" onClick={toggleOf}>
          Turn off all
        </button>
      </div>
      ;
    </main>
  );
}

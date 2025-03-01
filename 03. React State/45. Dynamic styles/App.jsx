import React from 'react';
import padsData from './pads';

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData);
  const styles = {
    backgroundColor: padsData.length % 2 === 0 ? 'red' : 'yellow',
  };
  const buttonElements = pads.map((pad) => (
    <button style={styles} key={pad.id}></button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

import React from 'react';

export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={`${props.on ? 'on' : undefined} sound-pad`}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}

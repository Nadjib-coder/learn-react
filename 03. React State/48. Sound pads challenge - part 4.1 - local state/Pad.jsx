import { useState } from 'react';

export default function Pad(props) {
  const [on, setOn] = useState(props.on);

  function toggle() {
    setOn((prevState) => !prevState);
  }
  return (
    <button
      onClick={toggle}
      style={{ backgroundColor: props.color }}
      className={on ? 'on' : undefined}
    ></button>
  );
}

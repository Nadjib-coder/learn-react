import { useState } from 'react';

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  function handelClick() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={handelClick}>
        {isShown ? 'Hide punchline' : 'Show punchline'}
      </button>
      <hr />
    </div>
  );
}

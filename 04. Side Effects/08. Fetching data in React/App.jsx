import React from 'react';
import { useState, useEffect } from 'react';

export default function App(props) {
  const [starWarsData, setStarWarsData] = useState(null);

  console.log('Rendred!');
  useEffect(
    function () {
      fetch('https://swapi.dev/api/people/1')
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [starWarsData],
  );

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

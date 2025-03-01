import React from 'react';
import Header from './Header';
import Body from './Body';
import { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState('Joe');

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  );
}

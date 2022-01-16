import React, { useState } from 'react';
import Lamp from './styles/Lamp';
import Button from './styles/Button';

function App() {
  const [light, setLight] = useState(false);
  const handleLight = () => {
    setLight(!light);
  }

  return (
    <div className="App">
      <br />
      <br />
      <Lamp light={light} />
      <br />
      <br />
      <Button onClick={handleLight} light={light}>
        {light ? 'On' : 'Off'}
      </Button>
    </div>
  );
}

export default App;

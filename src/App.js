import React from 'react';
import { useState } from 'react';
import Bulb from './bulb/bulb';
function App() {
  const [h, sH] = useState(true);
  const call = () => {
    sH(false);
  }
  return (
    <>     
    <Bulb/>
    </>
  );
}
export default App;
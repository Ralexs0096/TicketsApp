import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tickets APP</h1>
      <h3>{count}</h3>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        +1
      </Button>
    </>
  );
}

export default App;

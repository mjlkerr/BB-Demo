import React, { Suspense } from 'react';
import './App.css';

const Demo = React.lazy(() => import("./features/demo/Demo"));

function App() {
  return (
    <div>
      <Suspense fallback={<h3>Loading ...</h3>}>
        <Demo />
      </Suspense>
    </div>
  );
}

export default App;

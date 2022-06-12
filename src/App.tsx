import React, { Suspense } from 'react';
import './App.css';

const Demo = React.lazy(() => import("./features/demo/Demo"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <Demo />
      </Suspense>
    </div>
  );
}

export default App;

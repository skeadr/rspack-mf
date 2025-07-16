import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';

const Remote1 = React.lazy(() => loadRemote('remote1/Module') as any);
const Remote2 = React.lazy(() => loadRemote('remote2/Module') as any);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote1">Remote1</Link>
        </li>
        <li>
          <Link to="/remote2">Remote2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/remote1" element={<Remote1 />} />
        <Route path="/remote2" element={<Remote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

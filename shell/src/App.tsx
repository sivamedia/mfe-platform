import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import {
  Products,
  Orders,
  Users,
} from './remotes';

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Select a micro frontend.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>MFE Platform</h1>

      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/products">Products</Link>{' | '}
        <Link to="/orders">Orders</Link>{' | '}
        <Link to="/users">Users</Link>
      </nav>

      <hr />

      <Suspense fallback={<p>Loading micro frontend...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
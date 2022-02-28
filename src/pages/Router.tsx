import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Cart } from './Cart';
import { Catalog } from './Catalog';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
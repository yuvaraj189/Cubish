import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/landing/LandingSectionOne';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
{/*import Register from './components/Register/Register'*/}y
import Plans from './components/plan/plan';
import About from './components/about/about';
import Purchases from './components/purchases/purchases';
import { UserProvider } from './components/Login/UserContext'; // Named import for UserProvider
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <UserProvider> {/* Wrap your routes with UserProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
         {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          
          <Route
            path="/purchases"
            element={
              <ProtectedRoute>
                <Purchases />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

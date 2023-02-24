import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Community from './pages/Community';
import Login from './pages/Login';
import NoExistentPage from './pages/NoExistentPage';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Store from './pages/Store';
import { authServices } from './services/auth/authServices';
import { verifySession } from './services/token/verifySession';

function App() {
  const { user, updateUser, getUserToken } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    verifySession(user, token, (err, res) => {
      if (err) {
        return console.log(err);
      }
      const { firstName, lastName, email, role } = res?.userData;
      updateUser({ firstName, lastName, email, role, logged: true }, token!);
      navigate('/store');
    });
  }, []);
  return (
    <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NoExistentPage />} />
    </Routes>
  );
}

export default App;

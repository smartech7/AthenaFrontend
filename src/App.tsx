import './App.css';

import { AuthProvider } from '@/context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import CompanyList from './components/CompaniesList';
import Pricing from './components/Pricing';
import Analytics from './components/Analytics';
import { ChatProvider } from './context/ChatProvider';

import './App.css';
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeProvider >
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/CompaniesList" element={<CompanyList />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Analytics" element={<Analytics />} />
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;

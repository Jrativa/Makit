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

function App() {
  return (
    <div className="App">
      <Header />
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} /> 
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/companiesList' element={<CompanyList />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/analytics' element={<Analytics />} />
          </Routes>
        </BrowserRouter>
        
      </ChatProvider>
      <Footer />
    </div>
  );
}

export default App;

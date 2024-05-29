import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import { ThemeProvider } from "@/components/theme/theme-provider"

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';

document.addEventListener('contextmenu', event => event.preventDefault());

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex h-screen select-none no-scrollbar">
          <Sidebar/>
          <div className='flex flex-col min-h-screen w-full'>
            <Navbar/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

import { ThemeProvider } from "@/components/theme/theme-provider"

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from './components/navbar/Navbar';
//import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Records from './pages/Records';
import Alerts from './pages/Alerts';
import Layout from './pages/Layout';

document.addEventListener('contextmenu', event => event.preventDefault());

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex h-screen select-none no-scrollbar">
          <Sidebar/>
          <div className='flex flex-col min-h-screen w-full'>
            <Navbar/>
            <div className='flex flex-grow pr-8 pb-8'>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/records" element={<Records/>} />
              <Route path="/alerts" element={<Alerts/>} />
              <Route path="/layout" element={<Layout/>} />       
              <Route path="/account" element={<Account/>} />
            </Routes>
            </div>
            {/*<Footer/>*/}
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

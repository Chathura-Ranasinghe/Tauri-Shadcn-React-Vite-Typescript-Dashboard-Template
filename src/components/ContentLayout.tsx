import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';
import Records from '../pages/Records';
import Alerts from '../pages/Alerts';
import Layout from '../pages/Layout';
import { ScrollArea } from './ui/scroll-area';

const ContentLayout = () => {
  return (
    <ScrollArea className='flex flex-grow bg-red-100'>
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/records" element={<Records/>} />
            <Route path="/alerts" element={<Alerts/>} />
            <Route path="/layout" element={<Layout/>} />       
            <Route path="/account" element={<Account/>} />
        </Routes>
  </ScrollArea>
  )
}

export default ContentLayout
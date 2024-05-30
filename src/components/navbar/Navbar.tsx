import { Routes, Route } from 'react-router-dom';

import { ModeToggle } from "@/components/theme/mode-toggle";
import UserNav from "@/components/navbar/UserNav";
import { Accountcrumbs, Alertscrumbs, DashBoardcrumbs, Layoutcrumbs, Recordscrumbs } from './Breadcrumbs';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
        <Routes>
            <Route path="/dashboard" element={<DashBoardcrumbs/>} />
            <Route path="/records" element={<Recordscrumbs/>} />
            <Route path="/alerts" element={<Alertscrumbs/>} />
            <Route path="/layout" element={<Layoutcrumbs/>} />       
            <Route path="/account" element={<Accountcrumbs/>} />
        </Routes>
      </div>
      <div className="flex flex-1 items-center space-x-2 justify-end">
        <ModeToggle />
        <UserNav/>
      </div>
      </div>
    </header>
  )
}

export default Navbar;
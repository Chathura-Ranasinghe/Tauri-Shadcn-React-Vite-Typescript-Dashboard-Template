import { Routes, Route } from 'react-router-dom';

import { ModeToggle } from "@/components/theme/mode-toggle";
import UserNav from "@/components/navbar/UserNav";
import { Accountcrumbs, DashBoardcrumbs } from './Breadcrumbs';

const Navbar = () => {
  return (
    <header className="px-8 flex h-14 items-center bg-primary-foreground">
      <div>
        <Routes>
            <Route path="/dashboard" element={ <DashBoardcrumbs/>} />
            <Route path="/account" element={<Accountcrumbs/>} />
        </Routes>
      </div>
      <div className="flex flex-1 items-center space-x-2 justify-end">
        <ModeToggle />
        <UserNav/>
      </div>
    </header>
  )
}

export default Navbar;
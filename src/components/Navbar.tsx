import { ModeToggle } from "@/components/theme/mode-toggle";
import { CircleHelp } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-8 w-full flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <CircleHelp/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
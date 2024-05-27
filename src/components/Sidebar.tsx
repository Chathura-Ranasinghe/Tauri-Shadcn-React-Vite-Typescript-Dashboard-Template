import { ModeToggle } from "./mode-toggle"

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-full justify-between bg-background">
        <div>
            <h1>Sidebar</h1>
        </div>
        <div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Sidebar
import "./App.css";

import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Menubar from "./components/Menubar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        <div className="h-8 w-full">
          <Menubar />
        </div>
        <div className="flex flex-1">
          <div className="w-28">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Dashboard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

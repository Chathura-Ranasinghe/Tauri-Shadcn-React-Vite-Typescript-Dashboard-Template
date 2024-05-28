import "./App.css";

import { ThemeProvider } from "@/components/theme/theme-provider"
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

document.addEventListener('contextmenu', event => event.preventDefault());

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen select-none no-scrollbar">
        <Sidebar/>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

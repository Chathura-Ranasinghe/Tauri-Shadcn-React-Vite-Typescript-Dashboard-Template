import "./App.css";

import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";

document.addEventListener('contextmenu', event => event.preventDefault());

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen select-none">
        <Sidebar/>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

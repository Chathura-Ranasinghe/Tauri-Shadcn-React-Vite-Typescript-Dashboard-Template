import { useStore } from "@/hooks/useStore";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import SidebarToggle from "./SidebarToggle";

import { Zap } from "lucide-react";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  
  if(!sidebar) return null;

  return (
    <aside
      className={cn(
        "z-20 h-screen -translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto">
      <div
          className={cn(
            "flex transition-transform ease-in-out items-center duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-0" : "translate-x-0"
          )}
        >
            <Button variant="link">
              <Zap  fill="#3e9392" strokeWidth={0} className="w-6 h-6" />
            </Button>
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              DetectX
            </h1>
        </div>
      </div>
    </aside>
  );
}
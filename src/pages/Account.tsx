import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bolt, Wrench } from "lucide-react";

const Account = () => {
  return (
    <div className="flex w-full text-center bg-primary-foreground justify-center items-center rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-1">Coming Soon</h1>
        <p className="text-lg text-muted-foreground mb-6">This section is under construction.</p>
        <div className="flex">
          <Wrench size={100} strokeWidth={0.5}/>
          <Bolt size={50} strokeWidth={1}/>
        </div>
        <div className="flex justify-center items-center mt-2">
          <Link to="/dashboard" className="flex items-center">
            <p className="pr-2">Back to</p>
            <Button variant={"secondary"} className="text-lg">
            Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Account;

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex w-full text-center bg-primary-foreground justify-center items-center rounded-lg">
      <div>
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-muted-foreground mb-8">This section is under construction.</p>
        <div className="flex justify-center items-center">
          <Link to="/dashboard" className="flex items-center">
            <p className="pr-2">Back to</p>
            <Button variant={"secondary"} className="text-lg">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Layout
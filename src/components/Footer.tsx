import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="z-20 w-full bg-primary-foreground">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          Built on top of{" "}
          <Link
            to="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <div>
        <Image src="/logo.svg" width={40} height={40} alt="SnapChat Logo" />
      </div>
      <div className="flex space-x-1">
        <Button className="bg-transparent hover:bg-primary/5">
          Stories
        </Button>
        <Button className="bg-transparent hover:bg-primary/5">
          Spotlight
        </Button>
        <Button className="bg-transparent hover:bg-primary/5 text-black">
          <Link href={"/chat"}> Chat </Link>
        </Button>
      </div>
      <div className="flex space-x-2">
        <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
          Watch Tutorial
        </Button>
        <form>
          <Button className="bg-black text-white rounded-full p-3 text-xs md:text-sm">
            <LogOut className="cursor-pointer"></LogOut>
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;

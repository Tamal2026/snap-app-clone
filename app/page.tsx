import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  const auth = true;
  return (
    <div className="bg-[#fffc00]">
      <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
        <Navbar></Navbar>
        <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4">
          <div className="flex-1 md:text-left text-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold">
              SnapNext 4 Programmers!
            </h1>
            <p className="mt-4 text-xl font-semibold">
              Share your code with your friends to get feedback and improve your
              code.
            </p>
            <div className="mt-4 ">
              <p className="mt-2 text-lg font-semibold">
                What are you waiting For?
              </p>
            </div>
            <div className="flex items-center">
              <div></div>
              <div className="bg-white px-4 py-2 flex items-center gap-6 mt-4 rounded-lg">
                <Image
                  src={"/logo.svg"}
                  height={24}
                  width={24}
                  alt="logo"
                ></Image>
                <div>
                  <a href="/login">
                    {" "}
                    <h1 className="font-semibold">Login to Explore</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:w-full md:flex">
            <Image
              width={651}
              height={621}
              alt="avatar"
              src={"/hero.png"}
            ></Image>
          </div>
        </main>
      </div>
    </div>
  );
}

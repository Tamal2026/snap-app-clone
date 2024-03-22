import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  const auth = true;
  return (
    <main className="bg-[#fffc00]">
      <div>
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

            {!auth ? (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/login"} className="max-w-max">
                  Log in to Explore
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                className="mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0"
              >
                <Link href={"/chat"}>
                  <div className="flex items-center">
                  
                    <Image
                      src={"/logo.svg"}
                      width={20}
                      height={20}
                      alt="Snapchat logo"
                    />
                    <span>Start Chatting</span>
                  </div>
                </Link>
              </Button>
            )}
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
    </main>
  );
}

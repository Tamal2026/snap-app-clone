import { Button } from "@/components/ui/button";

import React from "react";
import Image from "next/image";

function LoginCard() {
  return (
    <>
      <form>
        <LoginButton></LoginButton>
      </form>
      <div>
        <span>New to SnapNext ?</span>
        <a
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href="/signup"
        >
          Sign Up
        </a>
      </div>
    </>
  );
}

function LoginButton() {
  return (
    <Button>
      <Image src={"/github.svg"} width={20} height={20} alt="Github Logo">
        {" "}
        Login With Github
      </Image>
    </Button>
  );
}

export default LoginCard;

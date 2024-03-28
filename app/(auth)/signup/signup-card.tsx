import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUpCard() {
  async function authAction() {
    "use server";
    await signIn("github");
  }
  return (
    <>
      <form action={authAction} className="space-y-4">
        <SignUpButton></SignUpButton>
      </form>
      <div className="mt-4 text-center text-[13px]">
        <span>Already have an account?</span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href={"/login"}
        >
          Log in
        </Link>
      </div>
    </>
  );
}

function SignUpButton() {
  return (
    <Button>
      <Image
        src={"/github.svg"}
        width={20}
        height={20}
        alt="Github Img"
      ></Image>
      Sign Up with Github
    </Button>
  );
}

"use client";

import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between w-[600px] rounded-lg bg-white p-3 px-5 text-black">
      <div className="space-x-4">
        <Button asChild variant={pathname == "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>Admin</Link>
        </Button>
        <Button asChild variant={pathname == "/client" ? "default" : "outline"}>
          <Link href={"/client"}>Client</Link>
        </Button>
        <Button asChild variant={pathname == "/server" ? "default" : "outline"}>
          <Link href={"/server"}>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname == "/settings" ? "default" : "outline"}
        >
          <Link href={"/settings"}>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;

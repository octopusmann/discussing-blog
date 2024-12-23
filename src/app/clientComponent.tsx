"use client";

import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { Session } from "next-auth";

interface ClientComponentProps {
  session: Session | null;
}

export default function ClientComponent({ session }: ClientComponentProps) {
  const handleSignIn = async () => {
    await actions.signIn();
  };

  const handleSignOut = async () => {
    await actions.signOut();
  };

  return (
    <div>
      <form action={handleSignIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={handleSignOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
    </div>
  );
}

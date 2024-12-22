import { auth } from "@/auth";
import ClientComponent from "./clientComponent";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <ClientComponent session={session} />
      {session?.user ? <div> Signed In </div> : <div>Signed Out </div>}
    </div>
  );
}

import { UserSession } from "@/components/business";
import { Button } from "@/components/ui";
import { OAUTH_SIGN_IN_URL } from "@/constants/path";
import { getServerSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  console.log(`
    Server session: ${JSON.stringify(session, null, 2)}
  `);

  if (!session) {
    redirect(OAUTH_SIGN_IN_URL);
  }

  return (
    <div className="h-screen">
      root page
      <UserSession />
      <Button>click</Button>
    </div>
  );
}
